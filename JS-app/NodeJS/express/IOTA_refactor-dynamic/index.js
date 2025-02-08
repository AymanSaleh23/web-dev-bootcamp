const express = require('express');
const app = express()

const { v4: uuid } = require('uuid'); //For generating ID's
const methodOverride = require('method-override')
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan')
const typeOptions = ['long', 'boolean', 'int', 'float', 'string', 'double']
const AppError = require('./appError')

mongoose.connect('mongodb://localhost:27017/iotdevs')
    .then(() => {
        console.log('Connected to the DB well');
    })
    .catch(() => {
        console.log('Connection Error');
    });

const deviceSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            immutable: true,
            dafault: uuid(),
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        dataType: {
            type: String,
            enum: typeOptions,
            required: true
        },
        exp: {
            type: Boolean,
            required: true,
            default: false
        },
        expData: {
            type: Date
        },
        expState: {
            type: Boolean,
            required: true,
            default: false
        },
        location: {
            type: String
        }, // geographical Location in Futuer (longtude, latitude)
        img: {
            type: String,
            default: 'https://raw.githubusercontent.com/AymanSaleh23/web-dev-bootcamp/refs/heads/main/JS-app/NodeJS/express/IOTA_refactor-dynamic/public/imgs/logo/logo.PNG'
        },
        about: {
            type: String,
            default: '<Dafault> No About inserted!'
        }
    }
);
const device = mongoose.model('Device', deviceSchema);

// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* Some Middleware functions/Calls */
app.use(express.static('public'));
//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'))
// To parse incoming JSON in POST request body:
app.use(express.json())
//  Simple logger tool
app.use(morgan('tiny'))
//A middle ware for  getting the date of the request
app.use((req, res, next) => {
    const reqDate = Date.now()
    console.log(reqDate)
    console.log(req.path)
    req.requstDate = new Date(reqDate).toISOString()
    next();
})

let iotDevs = [];

app.get('/iota', (req, res) => {
    res.render('iota/iota');
})

app.get('/iota/iot/active', async (req, res, next) => {
    console.log('/iota/iot/active')
    try {
        iotDevs = await device.find({ expState: false })
        if (!iotDevs) {
            throw new AppError("Can't connect to DataBase!", 500);
        }
        res.render('iota/iot/show', { iotDevs, state: "Active" });
    } catch (e) {
        next(e)
    }
})
app.get('/iota/iot/inactive', async (req, res, next) => {
    console.log('/iota/iot/inactive')
    try {
        iotDevs = await device.find({ expState: true })
        if (!iotDevs) {
            throw new AppError("Can't connect to DataBase!", 500);
        }
        res.render('iota/iot/show', { iotDevs, state: "In-Active" });
    } catch (e) {
        next(e)
    }
})
app.get('/iota/iot/', async (req, res, next) => {
    console.log('/iota/iot/all')
    try {
        iotDevs = await device.find({})
        if (!iotDevs) {
            throw new AppError("Can't connect to DataBase!", 500);
        }
    } catch (e) {
        next(e);
    }
    res.render('iota/iot/show', { iotDevs, state: "All" });
})

app.post('/iota/iot/delete/:devID', async (req, res, next) => {
    const { dev_id } = req.body;
    const data = await device.find({ id: dev_id })
    if (!data) {
        return next(new AppError("Device is not found to Delete", 404));
    }
    console.log('Deleting');
    console.log(`Device detected`);
    console.log(data);
    console.log(`Device will be deleted`);
    try {
        const q = await device.deleteOne({ id: dev_id });
        console.log(q)
        throw new AppError(e.message + "\nDevice can't be Deleted", 500);
    } catch (e) {
        next(e);
    }
    console.log(`${req.path}`)
    res.redirect(`../${req.path}`)
})

app.get('/iota/iot/modify/:devID', async (req, res, next) => {
    const devID = req.params.devID
    console.log(devID)
    const founded = await iotDevs.find(dev => dev.id === devID);
    if (!founded) {
        return next(new AppError("Device is not found to modify", 404));
    }
    console.log(`The IOT dev will modified`, founded);
    dateNow = req.requstDate.split(':')[0].substring(0, 10)
    res.render('iota/iot/modify', { founded, typeOptions, dateNow });
});

app.patch('/iota/iot/modify/:devId', async (req, res) => {
    const { dev_owner, dev_name, dev_id, dev_loc, DateToExp, dev_dataTy, devAbout } = req.body
    let { cb_exp, cb_en } = req.body
    cb_exp = (cb_exp) ? (true) : (false);
    cb_en = (cb_en) ? (true) : (false);
    console.log(`cb_en ${cb_en}`)
    try {
        const q = await device.updateOne({ id: dev_id }, {
            owner: dev_owner,
            name: dev_name,
            location: dev_loc,
            exp: cb_exp,
            expData: DateToExp,
            expState: cb_en,
            dataType: dev_dataTy,
            about: devAbout
        }, { new: true, runValidators: true });
        throw new AppError(e.message + "\nDevice can't be Modified", 500);
    } catch (e) {
        next(e);
    }
    res.redirect('../');
})

app.get('/iota/iot/add', (req, res) => {
    console.log(req.requstDate);
    dateNow = req.requstDate.split(':')[0].substring(0, 10)
    console.log(dateNow);
    res.render('iota/iot/add', { typeOptions, dateNow });
})

app.post('/iota/iot/add', async (req, res, next) => {
    const { dev_name, dev_owner, dev_loc, DateToExp, dev_dataTy, devAbout } = req.body
    let { cb_exp, cb_en } = req.body
    cb_exp = (cb_exp) ? (true) : (false);
    cb_en = (cb_en) ? (true) : (false);

    if (cb_exp === true && DateToExp === '') {
        console.log("Unavalable Date for expire.")
    }
    else {
        dev = new device({ owner: dev_owner, name: dev_name, id: uuid(), location: dev_loc, exp: cb_exp, expData: new Date(DateToExp), expState: cb_en, about: devAbout, dataType: dev_dataTy })
        const data = await dev.save();
        if (!data) {
            return next(new AppError("Can't Add this Device", 500));
        }
        console.log(`Added device ${data}`)
    }

    res.redirect('/iota/iot/');
})

app.get('/iota/iot/details/:id', async (req, res, next) => {
    const dev_id = req.params.id
    let dev = await iotDevs.find(dev => dev.id === dev_id);
    if (!dev) {
        return next(new AppError('Device Not Found', 404));
    }
    console.log(`The IOT dev will detailed`, dev);
    res.render(`iota/iot/details`, { dev });

})

app.get('/iota/ota', (req, res) => {
    res.render('iota/ota/show');
})

app.get('/iota/ota/add', (req, res) => {
    res.render('iota/ota/add');
})

app.get('/iota/:any', (req, res) => {
    const any = req.params.any;
    console.log(`Pattern is ${any}`)
    res.render(`iota/${any}`);
})

app.use((req, res) => {
    res.redirect('/iota/iot/');
})

app.use((error, req, res, next) => {
    const { message = 'Something went wrong', satus = 500 } = error
    res.status(satus).send(message)
});

app.listen(4000, () => {
    console.log('Listening on port 4000')
})