import React, { Component } from 'react';
import Time from './time';
import { Link } from 'react-router-dom';
// import BackgroundImage from './backgroundImage';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend';
import * as TodoActions from '../actions'
import * as TodosApi from '../actions/todos';
import * as titleActions from '../actions/boardTitle';
import { DragDropContext} from 'react-dnd';
import _ from 'lodash';
import {WholeBoard} from '../styles/--board';
import {AppWrap, Background} from '../styles/--main';
import Weather from '../container/weather';
import LandingPage from '../components/landingPage';
import Board from '../components/board';
import CitySearch from '../container/citySearch';
import { logout } from './../actions/auth';
import { getBoardTitles } from './../actions/boardTitle';




class Main extends Component {
  componentWillMount(){
    this.props.todoActions.fetchTodos()
    this.props.titleActions.getBoardTitleCall()
  }
  render() {
    let { todo, currentUser,boardTitle} = this.props;
    let { moveTodo } = this.props.actions
    let bt0 = _.filter(boardTitle,(bt)=> {return bt.boardPosition === 0})
    let bt1 = _.filter(boardTitle,(bt)=> {return bt.boardPosition === 1})
    let bt2 = _.filter(boardTitle,(bt)=> {return bt.boardPosition === 2})
    let b0 = _.filter(todo,(todos)=>{return todos.position === 0 }).sort((a,b)=>{ return a.index - b.index})
    let b1 = _.filter(todo,(todos)=>{return todos.position === 1 }).sort((a,b)=>{ return a.index - b.index})
    let b2 = _.filter(todo,(todos)=>{return todos.position === 2 }).sort((a,b)=>{ return a.index - b.index})
    
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

        
          <Time logout={this.props.logout} history={this.props.history}/>

   
        <WholeBoard>
         <Board bt={bt0} titleActions={this.props.titleActions} user={this.props.currentUser} todoActions={this.props.todoActions}  actions={this.props.actions}  movetodo={moveTodo} bpos='0'  todo={b0}/>
         <Board bt={bt1} titleActions={this.props.titleActions}  user={this.props.currentUser} todoActions={this.props.todoActions}  actions={this.props.actions}  movetodo={moveTodo} bpos='1'  todo={b1} />
         <Board bt={bt2} titleActions={this.props.titleActions}  user={this.props.currentUser} todoActions={this.props.todoActions}  actions={this.props.actions}  movetodo={moveTodo} bpos='2' todo={b2} />

       </WholeBoard>
       
           
    
        </AppWrap>
         </Background>

 
    );
  }
}

const mapStateToProps = state => state

const mapDispatchToProps= dispatch =>({
 actions: bindActionCreators(TodoActions, dispatch),
 todoActions: bindActionCreators(TodosApi,dispatch),
 logout: bindActionCreators(logout,dispatch),
 titleActions: bindActionCreators(titleActions,dispatch)
})
      
export default _.flow(connect(mapStateToProps,mapDispatchToProps),DragDropContext(HTML5Backend))(Main);

