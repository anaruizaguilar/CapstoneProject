const { 
    client,
    createTables,
    createCustomer
     } = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

const init = async() => {
    await client.connect();
    console.log('connected to database');
};

init();