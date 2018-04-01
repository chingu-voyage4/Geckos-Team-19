import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import { ItemType } from './../constants/itemType';
import FontAwesome from 'react-fontawesome';


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
handleDelete(e){
    let todoId = e.target.id
    this.props.actions.deleteTodo(todoId)

}
    render(){
   let {text,connectDragSource,id} = this.props;
    return connectDragSource(
        <div className="card" >
        <p>{text}<i id={id} onClick={this.handleDelete.bind(this)} className="fa fa-times"></i></p> 
        </div>
    )
    };
};

export default DragSource(ItemType.Card, TodoSource, collect)(Todo);