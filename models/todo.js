const mongoose = require('mongoose');
const User = require('./User');

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
       
    },
    position:{
        type:Number
    },
    index:{
        type:Number
    }
    ,
    opacity:{
        type:Number
    },
    completed: {type:Boolean},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
});

todoSchema.pre('remove', async function(next){
    try{
         //find user 
        let user = await User.findById(this.user);
        // remove id of the todo from thier todos list
        user.todos.remove(this.id);
        //save that user
        await user.save();
        // return next
        return next();
    }catch(err){
        return next(err);
    }
   
 
})
const Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;