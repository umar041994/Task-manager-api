
const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port =8000;  


const dbURI = "mongodb+srv://rocky:12345@task-manager.j2jvtli.mongodb.net/?appName=TASK-MANAGER"

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});