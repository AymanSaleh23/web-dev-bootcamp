const express = require('express')
const anima = require('../animals')
app = express()
console.dir(app)

// app.use((req, res) => {
//     console.log("A new Request!")
//     console.log(res)
//     // res.send('Hello this is my first response of a requist')
//     res.send(anima.CATS)
// })
// app.get('/cats', (req, res) => {
//     console.log("This is a GET request to be Handled")
//     let sendReq = { cats: anima.CATS, Sound: "meow" }
//     console.dir(req)
//     res.send(sendReq)

// })
// app.get('/', (req, res) => {
//     console.log("This is The main GET request to be Handled")
//     res.send("<h1>This is a GET request to be Handled</h1>")
//     console.dir(req)
// })

// app.post('/cats', (req, res) => {
//     res.send('<h1>This is a post request ! from /cats</h1>')
//     console.log('This is a post request ! from /cats')
// })
app.get('/r/:pattern', (req, res) => {
    let { pattern } = req.params;
    res.send(`<h1>This is a Get request ! from /${pattern}</h1>`)
    console.log(`This is a get request ! from /${pattern}`)
    console.log(req.params)
    console.log(req.params.pattern)
})

app.get('/r/:threadID/:commentId', (req, res) => {
    let { threadID, commentId } = req.params;
    res.send(`<h1>This is a Get request ! of Thread ${threadID} with comment ${commentId} </h1>`)
    console.log(`This is a get request ! of Thread ${threadID} with comment ${commentId}`)
    console.log(threadID)
    console.log(commentId)
})
app.get('/homepage', (req, res) => {
    let { queryStr } = req.query;
    if (!queryStr) {
        res.send(`<h1>Nothing found if nothing searched </h1>`)
        console.log(`<h1>Nothing found if nothing searched </h1>`)
    }
    else {
        res.send(`<h1>This is a Get request ! queryStr ${queryStr} </h1>`)
        console.log(`This is a get request ! queryStr ${queryStr}`)
        console.log(req.query)
        console.log(queryStr)
    }
})

app.listen(4000, () => {
    console.log("Listening to Port 4000")
})