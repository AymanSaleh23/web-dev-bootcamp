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

const app = express()

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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let iotDevs =
    [
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "float", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "string", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "boolean", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
        { id: uuid(), dataType: "int", exp: 'on', expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'), about: "not much about!!!", owner: owners[Math.floor(Math.random() * 12) + 1], devLoc: devLocation[Math.floor(Math.random() * 12) + 1], img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` },
    ];

app.get('/iota', (req, res) => {
    res.render('iota/iota');
})

app.get('/iota/iot', (req, res) => {
    res.render('iota/iot/show', { iotDevs });
})
app.post('/iota/iot/delete/:devID', (req, res) => {
    const { dev_id } = req.body;
    const founded = iotDevs.find(dev => dev.id === dev_id);
    if (founded) {
        console.log(`Device detected`);
        console.log(founded);
        console.log(`Device will be deleted`);
        iotDevs = iotDevs.filter(dev => dev.id !== dev_id);
    }
    else {
        console.log(`Error Occured while deleting`);
    }
    res.redirect('../');
})

app.get('/iota/iot/modify/:devID', (req, res) => {
    const devID = req.params.devID
    console.log(devID)
    const founded = iotDevs.find(dev => dev.id === devID);
    console.log(founded.id)
    res.render('iota/iot/modify', { founded });
});

app.patch('/iota/iot/modify/:devId', (req, res) => {
    const { dev_name, dev_id, dev_loc, cb_exp, DateToExp, dev_dataTy, devAbout } = req.body
    let founded = iotDevs.find(dev => dev.id === dev_id);
    if (founded) {
        console.log(founded)
        console.log("Patching")
        founded.owner = dev_name;
        founded.id = dev_id;
        founded.devLoc = dev_loc;
        founded.exp = cb_exp;
        founded.expDate = DateToExp;
        founded.dataType = dev_dataTy;
        founded.about = devAbout;
        console.log(founded)
        console.log("Patched")
    }
    else {
        console.log('Not Found')
    }
    res.redirect('../');
})

app.get('/iota/iot/add', (req, res) => {
    res.render('iota/iot/add');
})

app.post('/iota/iot/add', (req, res) => {
    const { dev_name, dev_id, dev_loc, cb_exp, DateToExp, dev_dataTy, devAbout } = req.body
    if (cb_exp === 'on' && DateToExp === '') {
        console.log("Unavalable Date for expire.")
    }
    else {
        iotDevs.push({ owner: dev_name, id: dev_id, devLoc: dev_loc, exp: cb_exp, expData: DateToExp, about: devAbout, dataType: dev_dataTy, img: `/imgs/iot-deveice-imgs/device-1${Math.floor(Math.random() * 9)}.jpg` })
        console.log(iotDevs[iotDevs.length - 1])
    }

    res.render('iota/iot/show', { iotDevs });
})

app.get('/iota/iot/details/:id', (req, res) => {
    const dev_id = req.params.id
    const dev = iotDevs.find(dev => dev.id === dev_id);
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