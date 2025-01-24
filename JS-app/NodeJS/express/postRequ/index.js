const express = require('express')
app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/hi.html/:id/:uid', (req, res) => {
    const { nm, uid } = req.body;
    console.log(nm, uid)
    res.send(`<h1>Hi from GET ${nm} and ${uid}</h1>`)
})

app.post('/hi.html/:id/:uid', (req, res) => {
    const { nm, uid } = req.body;
    console.log(nm, uid)
    res.send(`<h1>Hi from Post ${nm} and ${uid}</h1>`)
})

app.listen(4000, () => {
    console.log("Listening to Port 4000")
})