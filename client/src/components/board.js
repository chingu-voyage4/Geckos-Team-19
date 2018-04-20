import React, { Component } from 'react';
import Card from './card';
import { DropTarget } from 'react-dnd';
import { ItemType } from './../constants/itemType';

import { BoardWrap, InputStyle, FlexBtnInput, AddItemBtn, CardTitle } from './../styles/--board';
import { postNewTodo, moveTodo, movePos } from './../actions/todos';
import { createBoardTitle, createBoardTitleCall, getBoardTitles } from './../actions/boardTitle';



const BoardTarget= {
    drop(props,monitor,component){
        let {id} = monitor.getItem();
        let {updateTodo,moveTodo,movePos} = props.todoActions;
        let index = props.todo.length;
        // console.log(props)
       let { bpos } = props
       movePos(id,bpos)
    //    moveTodo(id,bpos,index)
       updateTodo(id,bpos)
       
        return {}
    }
    

}

function collect (connect, monitor){
  const info={connectDropTarget: connect.dropTarget() };
  return info;
}
 
class Board extends Component {
    constructor(props){
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this)
        this.updateState = this.updateState.bind(this);
        this.state={
            todo:'',
            cardTitle:'',
            cardNextTitle:''
        }
    }
    handleUpdate = e =>{
     this.setState({
         todo:e.target.value
     })
    }
    handleChange = e =>{
        if(e.which === 13){
            let text = this.state.todo;
            let pos = this.props.bpos;
            let index = this.props.todo.length;
            console.log(index)
            this.props.todoActions.addTodo(text,pos,index)
            this.props.todoActions.postNewTodo(text,pos,index)
            this.setState({
                todo:''
            })
        }
}
    handleTitleChange(e){
        e.preventDefault();
        this.setState({
            cardTitle:e.target.value
        })
    }
    handleBlur(e){
        let text = e.target.value
        if(e.target.value === ''){
            return this.setState({
                cardTitle:this.props.bt[0].text
            })
        }
        if(this.props.bt.length !== 0){
        return this.props.titleActions.updateBoardTitleCall(text,this.props.bt[0]._id)
        }else{
        let{bpos} = this.props
        let boardPosition = parseInt(bpos,10)
        this.props.titleActions.createBoardTitleCall(text,boardPosition)
         }
    }
    updateState(){
        if(this.props.bt.length === 1){
            this.setState({
                cardTitle:this.props.bt[0].text
            })
        }
    }
   
    render() {    
     const  {todo, connectDropTarget} = this.props;
     
        return connectDropTarget(
         <div className='Board'>
            <BoardWrap>
           
              <CardTitle onBlur={this.handleBlur} value={this.state.cardTitle}  onChange={this.handleTitleChange} type="text" placeholder={this.props.bt.length === 1 ?this.props.bt[0].text :'Enter Title'  } />


                 <FlexBtnInput>
                   <InputStyle  value={this.state.todo} onChange={this.handleUpdate.bind(this)} onKeyUp={this.handleChange.bind(this)} type="text"/>
                   {/* <AddItemBtn onClick={this.handleSubmit}>Add New</AddItemBtn> */}
                </FlexBtnInput>
            
            
                 <Card moveTodo={this.props.moveTodo} user={this.props.user} actions={this.props.todoActions} todo={todo}/>
          
              
            </BoardWrap>
            </div>
            
        );
    }
}

export default DropTarget(ItemType.Card, BoardTarget, collect)(Board);