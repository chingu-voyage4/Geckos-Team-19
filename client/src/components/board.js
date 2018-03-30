import React, { Component } from 'react';
import Card from './card';
import { DropTarget } from 'react-dnd';
import { ItemType } from './../constants/itemType';



const BoardTarget= {
    drop(props,monitor,component){
        let {id} = monitor.getItem();
       let { movetodo, bpos } = props
       movetodo(id,bpos)
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
    handleChange = e =>{
     this.setState({
        todo: e.target.value
    })
}
    handleSubmit = e =>{
        e.preventDefault();
        let text = this.state.todo;
        let pos = this.props.bpos;
        this.props.actions.addTodo(text,pos)
        this.setState({
            todo:''
        })
        
    }

    render() {
     const  {todo, connectDropTarget} = this.props;
        return connectDropTarget(
            <div className='Board'>
               <Card actions={this.props.actions} todo={todo}/>
               <form>
               <input value={this.state.todo} onChange={this.handleChange.bind(this)} type="text"/>
               <button onClick={this.handleSubmit}>AddTodo</button>
               </form>
            </div>
        );
    }
}

export default DropTarget(ItemType.Card, BoardTarget, collect)(Board);