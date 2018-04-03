const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/chingu19',{
    keepAlive:true
});

module.exports.User = require('./user');
module.exports.Todo = require('./todo');