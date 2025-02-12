
const methodOverride = require('method-override')
const path = require('path');
const morgan = require('morgan')

const AppError = require('./appError')

let {express, app, wrapAsync, viewFilter, mongoose, uuid, Schema, typeOptions} = require('./model/iot/shared')

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

require('./control/iot/iotControl')

app.get('/iota', (req, res) => {
    res.render('iota/iota');
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