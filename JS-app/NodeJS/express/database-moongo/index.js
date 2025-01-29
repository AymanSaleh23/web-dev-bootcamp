const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/iotdevs')
    .then(() => {
        console.log('Connected to the DB well');
    })
    .catch(() => {
        console.log('Connection Error');
    });

// const schemaMovie = new mongoose.Schema({ name: String, dateofreveal: Date, director: String, rate: Number })
// const movie = mongoose.model('Movie', schemaMovie);

// // const newRecord = new movie({ name: 'Corall of the bell', dateofreveal: 2013 - 12 - 3, director: 'motasiea' });
// // newRecord.rate = 2.3;
// // newRecord.save();
// movie.insertMany([
//     { name: 'Corall of the bell', dateofreveal: 2013 - 12 - 3, director: 'motasiea' },
//     { name: 'Don 2', dateofreveal: 2013 - 12 - 3, director: 'SRK' },
//     { name: 'new node', dateofreveal: 2012 - 12 - 3, director: 'Kan' },
//     { name: 'Bell and the bone', dateofreveal: 2020 - 11 - 3, director: 'hsmed' },
//     { name: 'Molan', dateofreveal: 2013 - 12 - 3, director: 'Ihsan' },
//     { name: 'Frozen', dateofreveal: 2013 - 12 - 3, director: 'Qunan' },
//     { name: 'Tarazan', dateofreveal: 2013 - 12 - 3, director: 'Raya' }
// ])

// for IOT purposes

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

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// device.insertMany([
//     {
//         id: 'id-for-iot-dev-131',
//         owner: 'Ayman Saleh Almosalamy',
//         dataType: 3,
//         exp: false,
//         expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'),
//         expState: false,
//         location: 'Grutz', // geographical Location in Futuer (longtude, latitude)
//         img: 'img url',
//         about: 'More about this device owner and the feature of the device functionality'
//     },
//     {
//         id: 'id-for-iot-dev-232',
//         owner: 'Alaa Alhamadani',
//         dataType: 1,
//         exp: true,
//         expData: randomDate(new Date(2012, 0, 1), new Date()).toLocaleDateString('en-US'),
//         expState: true,
//         location: 'KSA', // geographical Location in Futuer (longtude, latitude)
//         img: 'img url-2',
//         about: 'More about this device owner and the feature of the device functionality 2'
//     }
// ]).then((data) => {
//     console.log('Correct addition');
//     console.log(data);
// }).catch((error) => {
//     console.log('inCorrect addition');
//     console.log(error);
// })
const express = require('express')
const app = express();

let devList = []

app.get('/iota/iot', (req, res) => {
    device.find({})
        .then((data) => {
            console.log('Found', data.length, ' records');

            for (let record of data) {
                devList.push(record);
            }
            for (let dev of devList) {
                console.log('Elem')
                console.log(dev)
            }
        }).catch((error) => {
            console.log('inCorrect addition');
            console.log(error);
        })
    console.log('To add to UI')
})

app.listen(4000, () => {

    console.log('lestining on port 4000')
})