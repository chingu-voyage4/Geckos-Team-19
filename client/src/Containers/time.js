import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Clock, ClockWrap, ClockButton, $Date } from '../styles/--time';
import { onChangeTime } from '../actions/index';
import reducers from '../reducers/index';
import { store } from '../actions/store';

//add onChangeTime to ClockButton if you have the time



class Time extends Component {
  
    render() {
        
        return (

            <ClockWrap>
                <$Date>{store.getState().month.month + " " + store.getState().date.date + " " + store.getState().year.year} </$Date>
                <Clock> <ClockButton  > { store.getState().time.time }</ClockButton> </Clock>
        </ClockWrap>
        );
    }
   
    
}

export default connect(
    (state) => ({
        

    }),
    (dispatch) => ({
       //put actions here
    })
)(Time)
//function mapStateToProps(state) {
    //whatever is returned here shows up as props
    //return (
       // {
         //   time: state.time,
           // month: state.month,
            //date: state.date,
            //year: state.year
        //}
    //);
//}
//function mapDispatchToProps(dispatch) {
  //  return bindActionCreators({
    //    changeTime : changeTime
    //}, dispatch)
//}
