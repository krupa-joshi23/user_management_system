// external imports
const express = require('express');

// internal imports
const middlewares = require('./middlewares/index');
const mongodb = require('./utils/mongodb');
const routes = require('./routes/index');

const app = express();
const port = 3000;

// setup middlewares
middlewares(app);

// setup mongodb
mongodb.connection();

// setup routes
routes(app);

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running and App is listening on port: ${port}`);
    } else {
        console.log(`Error occurred, server cannot start, error: ${error}`);
    }
});
