import React, {Component} from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemType } from './../constants/itemType';
import {TodoAll, TrashCan, TodoText} from '../styles/--todo';
import {findDOMNode} from 'react-dom';
import _ from 'lodash';



const cardTarget = {
	hover(props, monitor, component) {
        const dragi = monitor.getItem();
        const hoveri = props;
		const dragIndex = monitor.getItem().index
		const hoverIndex = props.index

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}

		// Determine rectangle on screen
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

		// Determine mouse position
		const clientOffset = monitor.getClientOffset()

		// Get pixels to the top
		const hoverClientY = clientOffset.y - hoverBoundingRect.top

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%
        let {id,index}= dragi;
		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return 
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return 
		}
        // Time to actually perform the action
        props.actions.moveTodo(id,hoveri.pos,index,hoveri.index,hoveri.id)
        props.actions.updateMoveTodo(id,hoveri.pos,index,hoveri.index,hoveri.id)
      
        // id,pos,index,hoverIndex,hoverId

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// // to avoid expensive index searches.
        // monitor.getItem().index = hoverIndex
        monitor.getItem().index = hoverIndex
	},
}

function dropCollect(connect, monitor){
    return{
    connectDropTarget: connect.dropTarget()
    }
}



const TodoSource = {
    beginDrag(props, dnd, element){ 
        return{
                id:props.id,
                index:props.index}
    },
    endDrag(props,monitor,element){
       let item = monitor.getItem()
       props.actions.dragEnd(item.id)
    }
}

function dragCollect(connect, monitor){
    return{
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
    didDrop: monitor.didDrop()
    
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
       
   let {text,connectDragSource,id,connectDropTarget,isDragging,opacity,didDrop} = this.props;

   var styles = {
    //border:"1px green solid",
    width:"80%",
    margin:"8px auto",
     backgroundColor:"rgba(255,200,200,0.4)",
      borderRadius:"5px",
      fontFamily:"Helvetica",
    overflowWrap: "break-word",
    cursor:"pointer",
}
   return connectDragSource(connectDropTarget(
    <div style={{styles}} style={{opacity:didDrop?0:opacity}}>
    <TodoAll><TodoText>{text}</TodoText><span onClick={this.handleDelete.bind(this,id)} id={id}><TrashCan className="fa fa-trash"></TrashCan></span></TodoAll> 

    </div>
))
};
};


export default _.flow(DragSource(ItemType.Card, TodoSource, dragCollect),DropTarget(ItemType.Card,cardTarget,dropCollect))(Todo);