import React, { Component } from 'react';
import Time from './time';
import { Link } from 'react-router-dom'
// import BackgroundImage from './backgroundImage';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend';
import * as TodoActions from '../actions'
import { DragDropContext} from 'react-dnd';
import _ from 'lodash';
import {WholeBoard} from '../styles/--board';
import {AppWrap, Background} from '../styles/--main';
import Weather from '../container/weather';
import LandingPage from '../components/landingPage';
import Board from '../components/board';



class Main extends Component {
  render() {
    let { todos, currentUser } = this.props;
    let { moveTodo } = this.props.actions
    let b0 = _.filter(todos,(todos)=>{return todos.pos === 0 })
    let b1 = _.filter(todos,(todos)=>{return todos.pos === 1 })
    let b2 = _.filter(todos,(todos)=>{return todos.pos === 2 })
    if(!currentUser.isAuthenticated){
      return(
        <div>
          <Link to='/signin' >signin</Link>
           <span> or </span>
          <Link to='/signup' >signup</Link>
        </div>
      )
    }
      return (
        // <LandingPage/>
        <Background >

        <AppWrap >

        
          <Time/>

        <Weather />  
   
        <WholeBoard>
         <Board  actions={this.props.actions}  movetodo={moveTodo} bpos='0'  todo={b0}/>
         <Board  actions={this.props.actions}  movetodo={moveTodo} bpos='1'  todo={b1} />
         <Board  actions={this.props.actions}  movetodo={moveTodo} bpos='2' todo={b2} />

       </WholeBoard>
       
           
    
        </AppWrap>
        </Background>
        
 
    );
  }
}

const mapStateToProps = state => state

const mapDispatchToProps= dispatch =>({
 actions: bindActionCreators(TodoActions, dispatch) 
})
      
export default _.flow(connect(mapStateToProps,mapDispatchToProps),DragDropContext(HTML5Backend))(Main);

