const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect('mongodb://ladyv:BizzyBee135!@ds135619.mlab.com:35619/gecko19',{
    keepAlive:true
});

module.exports.User = require('./user');
module.exports.Todo = require('./todo');