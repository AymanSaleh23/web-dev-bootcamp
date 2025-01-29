let owners = ['Michael-Jackson', 'Johnny-Depp', 'Rowan-Atkinson', 'Jackie-Chan', 'Robert Downey Jr.',
    'Will Smith', 'Morgan Freeman', 'Megan Fox', 'Beyoncé', 'Leonardo DiCaprio',
    'Taylor Swift', 'Brad Pitt', 'Angelina Jolie', 'Chris Hemsworth', 'Rihanna',
    'Tom Cruise', 'Jennifer Lawrence', 'Dwayne "The Rock" Johnson',
    'Selena Gomez', 'Keanu Reeves', 'Scarlett Johansson', 'Robert Downey Jr.', 'Kim Kardashian',
    'Zendaya', 'Will Smith', 'Emma Watson', 'Justin Bieber', 'Margot Robbie'
]

let devLocation = [
    'Tokyo, Japan', 'Cape Town, S. Africa', 'Sydney, Australia', 'Reykjavik, Iceland', 'Machu Picchu, Peru',
    'Paris, France', 'Cairo, Egypt', 'Banff N.P., Canada', 'Santorini, Greece', 'Dubai, UAE',
    'Mount Everest, Nepal', 'NYC, USA', 'Venice, Italy', 'Bora Bora, French Polynesia', 'Rio de Janeiro, Brazil',
    'Marrakech, Morocco', 'Amsterdam, Netherlands', 'Petra, Jordan', 'Kyoto, Japan', 'Istanbul, Turkey'
]

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
        id: String,
        owner: String,
        dataType: Number,
        exp: Boolean,
        expData: Date,
        expState: Boolean,
        location: String, // geographical Location in Futuer (longtude, latitude)
        img: String,
        about: String
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
    console.log(founded.id)
    res.render('iota/iot/modify', { founded });
});

app.patch('/iota/iot/modify/:devId', (req, res) => {
    const { dev_name, dev_id, dev_loc, DateToExp, dev_dataTy, devAbout } = req.body
    let { cb_exp } = req.body
    cb_exp = (cb_exp) ? (true) : (false);

    const q = device.updateOne({ id: dev_id }, {
        owner: dev_name,
        location: dev_loc,
        exp: cb_exp,
        expDate: DateToExp,
        dataType: dev_dataTy,
        about: devAbout
    }, { new: true })
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
    const { dev_name, dev_id, dev_loc, DateToExp, dev_dataTy, devAbout } = req.body
    let { cb_exp } = req.body
    cb_exp = (cb_exp) ? (true) : (false);

    if (cb_exp === true && DateToExp === '') {
        console.log("Unavalable Date for expire.")
    }
    else {
        device.create({ owner: dev_name, id: dev_id, location: dev_loc, exp: cb_exp, expData: DateToExp, expState: false, about: devAbout, dataType: dev_dataTy, img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` })
            .then((data) => {
                console.log(`Added device ${data}`)
            })
            .catch((e) => {
                console.log(`Unable to add device ${e}`)
            })
    }

    res.render('iota/iot/show', { iotDevs });
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