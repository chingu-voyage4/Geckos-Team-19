const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGO_URL,{
keepAlive:true
});

module.exports.BoardTitle = require('./boardTitle');
module.exports.User = require('./user');
module.exports.Todo = require('./todo');