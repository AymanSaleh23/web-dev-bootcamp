const express = require('express');
const { v4: uuid } = require('uuid'); //For generating ID's
const methodOverride = require('method-override')
const path = require('path');
const mongoose = require('mongoose');
const { Console } = require('console');

let dataBaseInit = false;
mongoose.connect('mongodb://localhost:27017/iotdevs')
    .then(() => {
        console.log('Connected to the DB well');
        dataBaseInit = true;
    })
    .catch(() => {
        console.log('Connection Error');
        dataBaseInit = false;
    });

const app = express()

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
            required: true,
            immutable: true
        },
        owner: {
            type: String,
            required: true
        },
        dataType: {
            type: Number,
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

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'))
// To parse incoming JSON in POST request body:
app.use(express.json())
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));

//{ id: "", owner: "", dataType: Number, exp: Boolean, expData: Date, expStatus: Boolean, location: "", img: "" , about: ""}
let iotDevs = [];

app.get('/iota', (req, res) => {
    res.render('iota/iota');
})

app.get('/iota/iot', (req, res) => {
    iotDevs = [];
    device.find({})
        .then((data) => {
            console.log('Found', data.length, ' records');

            for (let record of data) {
                record.expData = new Date(record.expData)
                iotDevs.push(record);
            }
            for (let dev of iotDevs) {
                console.log('Elem')
                console.log(dev.id)
            }
            console.log('To add to UI')
            res.render('iota/iot/show', { iotDevs });
        }).catch((error) => {
            console.log('inCorrect addition');
            console.log(error);
            res.render('iota/iot/show');
        })
})

app.post('/iota/iot/delete/:devID', (req, res) => {
    const { dev_id } = req.body;
    device.find({ id: dev_id })
        .then((data) => {
            console.log('Deleting');
            console.log(`Device detected`);
            console.log(data);
            console.log(`Device will be deleted`);
            const q = device.deleteOne({ id: dev_id })
                .then(() => {
                    console.log(q)
                })
                .catch((e) => {
                    console.log(e)
                })
            res.redirect('../');
        })
        .catch((e) => {
            console.log(`Error while deleting! ${e}`);
        })
})

app.get('/iota/iot/modify/:devID', (req, res) => {
    const devID = req.params.devID
    console.log(devID)
    const founded = iotDevs.find(dev => dev.id === devID);
    console.log(`The IOT dev will modified`, founded);
    res.render('iota/iot/modify', { founded });
});

app.patch('/iota/iot/modify/:devId', (req, res) => {
    const { dev_owner, dev_name, dev_id, dev_loc, DateToExp, dev_dataTy, devAbout } = req.body
    let { cb_exp } = req.body
    cb_exp = (cb_exp) ? (true) : (false);

    const q = device.updateOne({ id: dev_id }, {
        owner: dev_owner,
        name: dev_name,
        location: dev_loc,
        exp: cb_exp,
        expData: DateToExp,
        dataType: dev_dataTy,
        about: devAbout
    }, { new: true, runValidators: true })
        .then((q) => {
            console.log(`${q}`)
        })
        .catch((e) => {
            console.log(`Error while modification, ${e}`)
        })
    res.redirect('../');
})

app.get('/iota/iot/add', (req, res) => {
    res.render('iota/iot/add');
})

app.post('/iota/iot/add', (req, res) => {
    const { dev_name, dev_owner, dev_loc, DateToExp, dev_dataTy, devAbout } = req.body
    let { cb_exp } = req.body
    cb_exp = (cb_exp) ? (true) : (false);

    if (cb_exp === true && DateToExp === '') {
        console.log("Unavalable Date for expire.")
    }
    else {
        device.create({ owner: dev_owner, name: dev_name, id: uuid(), location: dev_loc, exp: cb_exp, expData: new Date(DateToExp), expState: false, about: devAbout, dataType: dev_dataTy })
            .then((data) => {
                console.log(`Added device ${data}`)
            })
            .catch((e) => {
                console.log(`Unable to add device ${e}`)
            })
    }

    res.redirect('/iota/iot/');
})

app.get('/iota/iot/details/:id', (req, res) => {
    const dev_id = req.params.id
    let dev = iotDevs.find(dev => dev.id === dev_id);

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



app.listen(4000, () => {
    console.log('Listening on port 4000')
})