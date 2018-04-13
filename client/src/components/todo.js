import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import { ItemType } from './../constants/itemType';
import {TodoStyle} from '../styles/--board';
const TodoSource = {
    beginDrag(props, dnd, element){ 
        return{
                id:props.id,
                index:props.index}
    },
    endDrag(props,monitor,element){
    
    }
}
function collect(connect, monitor){
    return{
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
    }
}

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
handleDelete(id,e){
    this.props.actions.deleteTodo(id)
    this.props.actions.removeTodo(this.props.user.user.id,id)

}
    render(){
   let {text,connectDragSource,id} = this.props;
    return connectDragSource(
        <div className="card" >
        <TodoStyle>{text}<span onClick={this.handleDelete.bind(this,id)} id={id} ><i  className="fa fa-trash"></i></span></TodoStyle>
        </div>
    )
    };
};

export default DragSource(ItemType.Card, TodoSource, collect)(Todo);