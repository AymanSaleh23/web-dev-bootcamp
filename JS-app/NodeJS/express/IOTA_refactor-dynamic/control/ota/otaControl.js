var express = require('express')
var OTA_router = express.Router()


OTA_router.get('/iota/ota', (req, res) => {
    res.render('iota/ota/show');
})

OTA_router.get('/iota/ota/add', (req, res) => {
    res.render('iota/ota/add');
})

module.exports = { OTA_router }