let { app, wrapAsync, viewFilter, uuid, typeOptions, cookieParser } = require('../../model/shared')
const AppError = require('../../appError')

app.use(cookieParser())

//A middle ware for  getting the date of the request
app.use((req, res, next) => {
    console.log('Cookies: ', req.cookies)
    next()
})

app.get('/iota/ota', (req, res) => {
    res.render('iota/ota/show');
})

app.get('/iota/ota/add', (req, res) => {
    res.render('iota/ota/add');
})

