import React, { Component } from 'react';
import _ from 'lodash';
import Todo from './todo';
import {TodoStyle} from './../styles/--board'



class Card extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:''
        }
    }
   
    render() {
        const { todo } = this.props;
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
        let cardTodo = _.map(todo, (todo, i) => {
           return(

           
            <div style={styles} key={i}>
                    <Todo 
                    opacity={todo.opacity}
                    pos={todo.position}
                    user = {this.props.user}
                    actions={this.props.actions}
                    text={todo.text}
                    index={i}
                    id={todo._id}
                    />
            </div>
                    )
                })
                
        return( 
        <div>
            {cardTodo}
        </div>
        );
    }
}

export default Card;