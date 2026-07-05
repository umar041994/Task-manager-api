
const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4']);
require('./db/connection');

const express = require('express');

const app = express();
const port =8000;  




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});