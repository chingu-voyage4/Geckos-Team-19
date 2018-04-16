const db = require("../models");

exports.createTodo = async function(req, res, next) {
  try {
    console.log(req.body)
    let todo = await db.Todo.create({
      text: req.body.text,
      position:req.body.position,
      user: req.params.id,
      index:req.body.index,
      opacity:1
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.todos.push(todo.id);
    await foundUser.save();
    let foundTodo = await db.Todo.findById(todo._id).populate("user", {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json(foundTodo);
  } catch (err) {
    return next(err);
  }
};

// GET - /api/users/:id/todo/:todo_id
exports.getTodo = async function(req, res, next) {
  try {
    let todo = await db.Todo.find(req.params.todo_id);
    return res.status(200).json(todo);
  } catch (err) {
    return next(err);
  }
};

// DELETE /api/users/:id/todo/:todo_id
exports.deleteTodo = async function(req, res, next) {
  try {
    let foundTodo = await db.Todo.findById(req.params.todo_id);
    await foundTodo.remove();

    return res.status(200).json(foundTodo);
  } catch (err) {
    return next(err);
  }
};

exports.updateTodo = async function(req,res, next){
  try{
    let foundTodo = await db.Todo.update({_id:req.params.todo_id},{$set:{position:req.body.position}})
    .exec();
    return res.status(200).json(foundTodo);
  }catch(err){
    return next(err);
  }
}
exports.updateMoveTodo = async function(req,res,next){
  try{
    let updateTodo = await db.Todo.bulkWrite([
      {updateOne:{
        filter: {_id:req.body.dragId},
        update:{index:req.body.hoverIndex,position:req.body.position}
      }

      },{
        updateOne:{
          filter: {_id:req.body.hoverId},
          update: {index:req.body.dragIndex,position:req.body.position}
        }
      }
    
    ]);
    return res.status(200).json(updateTodo)
  }catch(err){
    return next(err);
  }
}