const express = require('express')
const path = require('path')

app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.get('/', (req, res) => {
    res.render('content')
})

app.listen(4000, () => {
    console.log("Listening to Port 4000")
})