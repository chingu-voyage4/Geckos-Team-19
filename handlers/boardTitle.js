const db = require('../models');


exports.createBoardTitle = async function(req, res, next) {
    try {
      console.log(req.body)
      let boardtitle = await db.BoardTitle.create({
        text: req.body.text,
        boardPosition:req.body.position,
        user:req.params.id
      });
      let foundUser = await db.User.findById(req.params.id);
      foundUser.boardTitles.push(boardtitle._id);
      await foundUser.save();
      
      return res.status(200).json(boardtitle);
    } catch (err) {
      return next(err);
    }
  };

  exports.getBoardTitles = async function(req, res, next){
    try{
        let id = req.params.id;
         let boardTitles = await db.BoardTitle.find({user:id})
        return res.status(200).json(boardTitles);
    }catch(err){
        return next(err);
    }
 }
  
 
  
exports.updateboardTilte = async function(req,res, next){
    try{
      let updateBoard = await db.BoardTitle.update({_id:req.params.board_id},{$set:{text:req.body.text}})
      .exec();
      return res.status(200).json(updateBoard);
    }catch(err){
      return next(err);
    }
  }