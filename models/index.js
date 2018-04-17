const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect(keys.MONGO_URL,{
keepAlive:true
});

module.exports.BoardTitle = require('./boardTitle.js');
module.exports.User = require('./User.js');
module.exports.Todo = require('./todo.js');