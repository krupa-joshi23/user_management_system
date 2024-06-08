// external imports
const express = require('express');
const cookieParser = require('cookie-parser');

// internal imports
// const logger = require('../utils/logger');

module.exports = function (app) {

    // enable cookies
    app.use(cookieParser());

    // enable http logging
    if (true) {
        // app.use(logger.startHttpLogger());
    }

    // enable request body parsing when req comes from html form
    app.use(express.urlencoded({ extended: false }));

    // enable request body parsing when req comes in json format
    app.use(express.json());
}