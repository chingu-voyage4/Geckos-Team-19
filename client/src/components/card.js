import React, { Component } from 'react';
import _ from 'lodash';
import Todo from './todo';
import {TodoStyle} from './../styles/--board'
import { FadeIn} from '../styles/--todo';


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
            // border:"1px blue solid",
            backgroundColor:"rgba(255,255,255,.8)",
            borderRadius:"5px",
            fontFamily:"Helvetica",
            overflowWrap: "break-word",
            cursor:"pointer",
            alignItems:"center",
            width:"80%",
            margin:"8px auto",
            boxShadow:"2px 2px 2px rgba(0,0,0,0.8)"

        }
        let cardTodo = _.map(todo, (todo, i) => {
           return(

     
            <div style={styles} key={i}>
                 <FadeIn>
                    <Todo 
                    opacity={todo.opacity}
                    pos={todo.position}
                    user = {this.props.user}
                    actions={this.props.actions}
                    text={todo.text}
                    index={i}
                    id={todo._id}
                    />
               </FadeIn>
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