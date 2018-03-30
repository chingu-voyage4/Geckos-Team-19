import React, { Component } from 'react';
import _ from 'lodash';
import Todo from './todo';



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
                    <Todo
                    actions={this.props.actions}
                    text={todo.text}
                    index={i}
                    id={todo.id}
                    key={i}
                    />
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
