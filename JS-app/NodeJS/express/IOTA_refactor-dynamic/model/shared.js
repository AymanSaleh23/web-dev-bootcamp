const express = require('express');
const cookieParser = require('cookie-parser')

const app = express()

const { v4: uuid } = require('uuid'); //For generating ID's
const {mongoose} = require('mongoose');
const {Schema} = mongoose

const typeOptions = ['Boolean', 'String', 'Long', 'Int', 'Float', 'Double', 'LongDate', 'ShortDate']
/*
Makee a session configurations like:
- secret
- resave
- cookies parameters like date to expire and others.
*/
let configSession = {
    secret: 'this is a secret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires: Date.now()+60000,
        maxAge: 60000
    }  
}
function wrapAsync(fn, msg = "Something went worng!") {
    return function (req, res, next) {
        fn(req, res, next).catch((e) => {
            console.log(msg)
            console.log(e.message)
            next(e)
        });
    }
}

async function viewFilter(db, condition, populateFiled) {
    return db.find(condition).populate(populateFiled)
}

module.exports = {express, app, wrapAsync, viewFilter, mongoose, uuid, Schema, typeOptions, cookieParser, configSession}