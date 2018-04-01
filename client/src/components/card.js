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
        let cardTodo = _.map(todo,(todo,i)=>{
           return(
            <TodoStyle  key={i} >
                    <Todo
                    actions={this.props.actions}
                    text={todo.text}
                    index={i}
                    id={todo.id}
                    />
            </TodoStyle>
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
