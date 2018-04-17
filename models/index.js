const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect(keys.MONGO_URL,{
keepAlive:true
});

module.exports.User = require('./user');
module.exports.Todo = require('./todo');