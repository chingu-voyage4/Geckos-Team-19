import React, { Component } from 'react';
import Card from './card';
import { DropTarget } from 'react-dnd';
import { ItemType } from './../constants/itemType';
import { BoardWrap, InputStyle, FlexBtnInput, AddItemBtn, CardTitle } from './../styles/--board';
import { postNewTodo, moveTodo } from './../actions/todos';



const BoardTarget= {
    drop(props,monitor,component){
        let {id} = monitor.getItem();
        let {updateTodo,moveTodo} = props.todoActions;
       let { bpos } = props
       updateTodo(id,bpos)
       moveTodo(id,bpos)
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
            this.props.todoActions.addTodo(text,pos)
            this.props.todoActions.postNewTodo(text,pos)
            this.setState({
                todo:''
            })
        }
}
    // handleSubmit = e =>{
    //     e.preventDefault();
    //     let text = this.state.todo;
    //     let pos = this.props.bpos;
    //     this.props.actions.addTodo(text,pos)
    //     this.setState({
    //         todo:''
    //     })
        
    // }

    render() {
     const  {todo, connectDropTarget} = this.props;
        return connectDropTarget(
         <div className='Board'>
            <BoardWrap>
            <CardTitle type="text" placeholder="Enter Title"/>
                <FlexBtnInput>
                   <InputStyle  value={this.state.todo} onChange={this.handleUpdate.bind(this)} onKeyUp={this.handleChange.bind(this)} type="text"/>
                   {/* <AddItemBtn onClick={this.handleSubmit}>Add New</AddItemBtn> */}
                </FlexBtnInput>
            
            
               
               <Card user={this.props.user} actions={this.props.todoActions} todo={todo}/>
               
              
            </BoardWrap>
            </div>
            
        );
    }
}

export default DropTarget(ItemType.Card, BoardTarget, collect)(Board);