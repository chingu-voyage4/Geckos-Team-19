require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const db = require('./models');
const PORT = 8081;


app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
})
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/users/:id/todos',
loginRequired,
ensureCorrectUser,
 todoRoutes);
 

app.get('/api/todos',loginRequired, async function(req,res,next){
    try{
        let todos = await db.Todo.find()
        .sort({createAt:'desc'})
        .populate('user',{
            username:true,
            profileImageUrl:true
        });
        return res.status(200).json(todos);
    }catch(err){
        return next(err);
    }
})
app.use(function(req,res,next){
    let err = new Error('NOT Found')
    err.status = 404;
    next(err);

});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server is starting on ${PORT}`)
})