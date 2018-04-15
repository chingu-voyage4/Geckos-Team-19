import React, { Component } from 'react';
import Card from './card';
import { DropTarget } from 'react-dnd';
import { ItemType } from './../constants/itemType';
import { BoardWrap, InputStyle, FlexBtnInput, AddItemBtn } from './../styles/--board';
import { postNewTodo, moveTodo, movePos } from './../actions/todos';
import update from 'immutability-helper';



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
        this.state={
            todo:''
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
   
    render() {
     const  {todo, connectDropTarget} = this.props;
     
        return connectDropTarget(
         <div className='Board'>
            <BoardWrap>
            
                <FlexBtnInput>
                   <InputStyle  value={this.state.todo} onChange={this.handleUpdate.bind(this)} onKeyUp={this.handleChange.bind(this)} type="text"/>
                   {/* <AddItemBtn onClick={this.handleSubmit}>Add New</AddItemBtn> */}
                </FlexBtnInput>
            
               {/* <p> drag here </p> */}
               
               <Card moveTodo={this.props.moveTodo} user={this.props.user} actions={this.props.todoActions} todo={todo}/>
               
              
            </BoardWrap>
            </div>
            
        );
    }
}

export default DropTarget(ItemType.Card, BoardTarget, collect)(Board);