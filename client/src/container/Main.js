import React, { Component } from 'react';
import Time from './time';
import { Link } from 'react-router-dom';
// import BackgroundImage from './backgroundImage';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend';
import * as TodoActions from '../actions'
import * as TodosApi from '../actions/todos';
import { DragDropContext} from 'react-dnd';
import _ from 'lodash';
import {WholeBoard} from '../styles/--board';
import {AppWrap, Background} from '../styles/--main';
import Weather from '../container/weather';
import LandingPage from '../components/landingPage';
import Board from '../components/board';
import CitySearch from '../container/citySearch';



class Main extends Component {
  componentWillMount(){
    this.props.todoActions.fetchTodos()
  }
  render() {
    let { todo, currentUser } = this.props;
    let { moveTodo } = this.props.actions
    let b0 = _.filter(todo,(todos)=>{return todos.position === 0 })
    let b1 = _.filter(todo,(todos)=>{return todos.position === 1 })
    let b2 = _.filter(todo,(todos)=>{return todos.position === 2 })
    if(!currentUser.isAuthenticated){
      return(
        <Background>
         <LandingPage/>
        </Background>
      )
    }
      return (
      
        <Background >

        <AppWrap >

        
          <Time/>
        <Weather />  
   
        <WholeBoard>
         <Board user={this.props.currentUser} todoActions={this.props.todoActions}  actions={this.props.actions}  movetodo={moveTodo} bpos='0'  todo={b0}/>
         <Board user={this.props.currentUser} todoActions={this.props.todoActions}  actions={this.props.actions}  movetodo={moveTodo} bpos='1'  todo={b1} />
         <Board user={this.props.currentUser} todoActions={this.props.todoActions}  actions={this.props.actions}  movetodo={moveTodo} bpos='2' todo={b2} />

       </WholeBoard>
       
           
    
        </AppWrap>
         </Background>
        
 
    );
  }
}

const mapStateToProps = state => state

const mapDispatchToProps= dispatch =>({
 actions: bindActionCreators(TodoActions, dispatch),
 todoActions: bindActionCreators(TodosApi,dispatch)
})
      
export default _.flow(connect(mapStateToProps,mapDispatchToProps),DragDropContext(HTML5Backend))(Main);

