// external imports
const { MongoClient } = require('mongodb');

// internal imports
const config = require('../config');

const mongodb = () => { };

let database; // holds database name for mongodb
let collection; // holds collection name for mongodb

/**
 * @description to establish mongodb connection
 */
mongodb.connection = () => {
    const client = new MongoClient(config.get('mongodb.connectionUri'));
    client.connect().then(() => {
        console.log('Mongodb connection established successfully');
        database = client.db(config.get('mongodb.database'));
        collection = database.collection(config.get('mongodb.collection.user'));
    }).catch((error) => {
        console.error(`Error occurred while connecting with mongodb, error: ${error}`);
    });
}

/**
 * @description to add new document in database
 * @param {*} doc 
 * @returns id of inserted document
 */
mongodb.addDocument = (doc) => {
    return new Promise((resolve, reject) => {
        collection.insertOne(doc).then((result) => {
            console.log(`${result.insertedId} documents inserted successfully.`);
            resolve(result.insertedId);
        }).catch((error) => {
            console.log(`Error while inserting documents, error: ${error}`);
            reject(error);
        });
    });
}

module.exports = mongodb;
