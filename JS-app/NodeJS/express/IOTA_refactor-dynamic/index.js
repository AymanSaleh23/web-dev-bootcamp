
const methodOverride = require('method-override')
const path = require('path');
const morgan = require('morgan')
//Cookie parser package to handle the received cookies from Browser
const cookieParser = require('cookie-parser')
//Session manager for sessions and configure it
const session = require('express-session')
const flash = require('connect-flash')
const AppError = require('./appError')

let {express, app, wrapAsync, viewFilter, mongoose, uuid, Schema, typeOptions, configSession} = require('./model/shared')

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
//Call the cookie parser in middle ware to handle it for every received cookie
app.use(cookieParser())
//Call the session in middle ware to handle it for every received session based on the pre-set session configuration
app.use(session(configSession))
app.use(flash())

require('./control/iot/iotControl')
require('./control/ota/otaControl')

app.get('/iota', (req, res) => {
    res.render('iota/iota');
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