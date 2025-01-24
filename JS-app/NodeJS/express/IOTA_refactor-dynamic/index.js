let owners = ['Michael Jackson', 'Johnny Depp', 'Rowan Atkinson', 'Jackie Chan', 'Robert Downey Jr.',
    'Will Smith', 'Morgan Freeman', 'Megan Fox', 'Beyoncé', 'Leonardo DiCaprio',
    'Taylor Swift', 'Brad Pitt', 'Angelina Jolie', 'Chris Hemsworth', 'Rihanna',
    'Tom Cruise', 'Jennifer Lawrence', 'Dwayne "The Rock" Johnson',
    'Selena Gomez', 'Keanu Reeves', 'Scarlett Johansson', 'Robert Downey Jr.', 'Kim Kardashian',
    'Zendaya', 'Will Smith', 'Emma Watson', 'Justin Bieber', 'Margot Robbie'
]

let mcu_location = [
    'Tokyo, Japan', 'Cape Town, S. Africa', 'Sydney, Australia', 'Reykjavik, Iceland', 'Machu Picchu, Peru',
    'Paris, France', 'Cairo, Egypt', 'Banff N.P., Canada', 'Santorini, Greece', 'Dubai, UAE',
    'Mount Everest, Nepal', 'NYC, USA', 'Venice, Italy', 'Bora Bora, French Polynesia', 'Rio de Janeiro, Brazil',
    'Marrakech, Morocco', 'Amsterdam, Netherlands', 'Petra, Jordan', 'Kyoto, Japan', 'Istanbul, Turkey'
]

let imgs = []

const express = require('express');

const path = require('path');

const app = express()


//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));


app.get('/iota', (req, res) => {
    res.render('iota/iota');
})

app.get('/iota/iot', (req, res) => {
    res.render('iota/iot/show');
})
app.get('/iota/iot/add', (req, res) => {
    res.render('iota/iot/add');
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