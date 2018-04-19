const helmet = require('helmet');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const boardTitleRoutes = require('./routes/boardTitle');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const db = require('./models');
const PORT = process.env.PORT || 8081;


app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/api/users/:id/board',
loginRequired,
ensureCorrectUser,
boardTitleRoutes
)
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/todos',
loginRequired,
ensureCorrectUser,
 todoRoutes);
 

app.get('/api/user/:id/todos',loginRequired,ensureCorrectUser, async function(req,res,next){
    try{
        let id = req.params.id;
         let todos = await db.Todo.find({user:id})
        return res.status(200).json(todos);
    }catch(err){
        return next(err);
    }
})
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    })
}
app.use(function(req,res,next){
    let err = new Error('NOT Found')
    err.status = 404;
    next(err);

});

app.use(errorHandler);


app.listen(PORT, function(){
    console.log(`Server is starting on ${PORT}`)
})