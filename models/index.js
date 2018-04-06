const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect('mongodb://piccolo:dog@ds135619.mlab.com:35619/chingu19',{
    keepAlive:true
});

module.exports.User = require('./user');
module.exports.Todo = require('./todo');