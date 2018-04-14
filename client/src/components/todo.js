import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import { ItemType } from './../constants/itemType';
import {TodoText, TrashCan} from '../styles/--todo';
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
   var styles = {
    // border:"1px blue solid",
    display:"flex",
    width:"100%",
    minHeight:"50px",
    maxHeight:"auto",
    backgroundColor:"rgba(255,255,255,0.4)",
    borderRadius:"5px",
    textAlign:"center",
    boxShadow:"1px 1px 5px rgba(0,0,0,0.4)",
    fontFamily:"Helvetica",
    overflowWrap: "break-word",
    cursor:"pointer",
    justifyContent:"space-around",
    alignItems:"center",

   }
    return connectDragSource(
        // <div style={styles} className="card">
        // <TodoText> {text} </TodoText>
        // <div  onClick={this.handleDelete.bind(this,id)} id={id} >
        // <TrashCan  className="fa fa-trash"></TrashCan>
        // </div>
        // </div>
        <div className="card" style={styles} >
        <TodoText>{text}<span onClick={this.handleDelete.bind(this,id)} id={id} ><i  className="fa fa-trash"></i></span></TodoText> 
        </div>
    )
    };
};

export default DragSource(ItemType.Card, TodoSource, collect)(Todo);