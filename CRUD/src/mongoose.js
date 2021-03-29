const mongoose = require('mongoose');

const options = mongoose.connect('mongodb://localhost:27017/ecomerce',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => console.log('Connected succsesfully'))
    .catch((err) => console.log(err));

module.exports = {
    options
}