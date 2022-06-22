require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const { API_PORT, MONGO_CONNECTION_DATA } = process.env;

mongoose.connect( MONGO_CONNECTION_DATA )
    .then(() =>{
        console.log(`Database connected`);
        server.listen(API_PORT, (error) => {
            if(error) throw new Error("Error in server setup");
            console.log(`API listening at port: ${API_PORT}`);
        });
    })
    .catch(() => {
        console.log(`Database synchronization failed.\nPlease check for recently changes on Database (i.e Models) and restart the API.`);
    })