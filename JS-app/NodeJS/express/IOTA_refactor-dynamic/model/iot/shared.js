const express = require('express');
const app = express()

const { v4: uuid } = require('uuid'); //For generating ID's
const {mongoose} = require('mongoose');
const {Schema} = mongoose

const typeOptions = ['Boolean', 'String', 'Long', 'Int', 'Float', 'Double', 'LongDate', 'ShortDate']

function wrapAsync(fn, msg = "Something went worng!") {
    return function (req, res, next) {
        fn(req, res, next).catch((e) => {
            console.log(msg)
            console.log(e.message)
            next(e)
        });
    }
}

async function viewFilter(db, condition) {
    return db.find(condition)
}

module.exports = {express, app, wrapAsync, viewFilter, mongoose, uuid, Schema, typeOptions}