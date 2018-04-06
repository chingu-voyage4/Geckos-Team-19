const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect('mongodb://leikinna:fainka11@ds235609.mlab.com:35609/leikinna',{
    keepAlive:true
});

module.exports.User = require('./user');
module.exports.Todo = require('./todo');