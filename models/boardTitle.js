
const mongoose = require('mongoose');
const User = require('./User');

const BoardTitleSchema = new mongoose.Schema({
    text:{
        type:String
    },
    boardPosition:{
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" 
    }
})



const BoardTitle = mongoose.model('BoardTitle',BoardTitleSchema);


module.exports = BoardTitle;