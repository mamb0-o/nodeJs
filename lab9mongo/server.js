const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.error('Connection to MongoDB failed...', error));