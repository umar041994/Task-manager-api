
const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4']);


const express = require('express');

const app = express();
const port =process.env.PORT || 6000; 
const connectDb = require('./db/connection');
require('dotenv').config(); 



const start = async () => {
  try{
    await connectDb(process.env.MONGOOSE_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })    
  }catch(error){
      console.log('Error connecting to MongoDB:', error);
    } 
}

start();