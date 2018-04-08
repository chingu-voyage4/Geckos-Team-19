const mongoose = require('mongoose');
const mlabKey= require('.env')
mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect('',{
    keepAlive:true
});

module.exports.User = require('./user');
module.exports.Todo = require('./todo');