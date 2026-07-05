const mongoose = require('mongoose');
const dbURI = "mongodb+srv://rocky:12345@task-manager.j2jvtli.mongodb.net/?appName=TASK-MANAGER"

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });