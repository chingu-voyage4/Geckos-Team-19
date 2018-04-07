import React, { Component } from 'react';
import Time from './container/time';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend';
import * as TodoActions from '../src/actions/index'
import { DragDropContext} from 'react-dnd';
import Board from '../src/components/board';
import _ from 'lodash';
import {WholeBoard} from './styles/--board';
import {AppWrap, Background} from './styles/--main';
import Weather from './container/weather';
import BackgroundImage from'./container/backgroundImage'

class App extends Component {
  render() {
    let { todos } = this.props;
    let { moveTodo } = this.props.actions
    let b0 = _.filter(todos,(todos)=>{return todos.pos === 0 })
    let b1 = _.filter(todos,(todos)=>{return todos.pos === 1 })
    let b2 = _.filter(todos,(todos)=>{return todos.pos === 2 })
   
      return (
       
      
        <AppWrap>
          {/* <Background > */}
          <Time/>

        <Weather />  
   
        <WholeBoard>
         <Board  actions={this.props.actions}  movetodo={moveTodo} bpos='0'  todo={b0}/>
         <Board  actions={this.props.actions}  movetodo={moveTodo} bpos='1'  todo={b1} />
         <Board  actions={this.props.actions}  movetodo={moveTodo} bpos='2' todo={b2} />

       </WholeBoard>
       <BackgroundImage/>
           
        {/* </Background> */}
        </AppWrap>
 
    );
  }
}

const mapStateToProps = state => state

const mapDispatchToProps= dispatch =>({
 actions: bindActionCreators(TodoActions, dispatch) 
})
      
export default _.flow(connect(mapStateToProps,mapDispatchToProps),DragDropContext(HTML5Backend))(App);

