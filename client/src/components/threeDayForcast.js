import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { store } from '../actions/store';
import {Hide, Show,  VertLine, DayName, Days,BtnToggleWrap, Text,ThreeDayInfo , OneDay, BtnDaysContainer} from '../styles/--threeDayForecast';
import {ListItems} from '../styles/--weather';
import {Label, Slider, SliderCheckbox } from '../styles/--toggleSwitch';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import {More} from '../styles/--more';
import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';

var d = new Date();
var weekday = new Array(8);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
weekday[7] = "Sun";



class ThreeDayForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threeDayToggle: false,
            checked:false,
            showTemp:"F"
        };
        this.handleThreeDayToggle = this.handleThreeDayToggle.bind(this);
        this.handleTempChange = this.handleTempChange.bind(this);
      }
    handleTempChange(){
    this.setState(prevState => ({
        checked: !this.state.checked,
        showTemp: this.state.checked ? "F" : "C" 
    }));
    }
    handleThreeDayToggle(){
        this.setState(prevState =>({
        threeDayToggle: !prevState.threeDayToggle
        }));
    }
    returnTemp = (day) => {
        if(this.state.showTemp === 'F'){
            switch(day){
                case 'day1':
                return store.getState().temp.day1F;
                break;
                case 'day2':
                return store.getState().temp.day2F;
                break;
                case 'day3':
                return store.getState().temp.day3F;
                break;
                default:
                return 'Temperature' +<br/>+ 'Unavailable';
            }
        } else {
            switch(day){
            case 'day1':
                return store.getState().temp.day1C;
                break;
                case 'day2':
                return store.getState().temp.day2C;
                break;
                case 'day3':
                return store.getState().temp.day3C;
                break;
                default:
                return 'Temperature' +<br/>+ 'Unavailable';
        }}
    }
    forecastToggle() {
        if(this.state.threeDayToggle === false){
            return(
            <Hide>
            </Hide>
            )
        } else {
        return(
    <Show>    
  
        <Days>
            <OneDay>
              <DayName>{weekday[d.getDay()]}</DayName>
              
                <Text>{store.getState().main.main}</Text>
                <Text>{this.returnTemp('day1')}</Text>
                 <i className={store.getState().main.icon}></i>
               
            </OneDay>

           
           
            <OneDay>
              <DayName>{weekday[d.getDay()+1]}</DayName>
          
                <Text>{store.getState().main.main}</Text>
                <Text>{this.returnTemp('day2')}</Text>
                <i className={store.getState().main.icon}></i>
   
            </OneDay>
 


            <OneDay>
              <DayName>{weekday[d.getDay()+2]}</DayName>

                <Text>{store.getState().main.main}</Text>
                <Text>{this.returnTemp('day3')}</Text>
                <i className={store.getState().main.icon}></i>
             
            </OneDay>

             <ToggleSwitch
            size = "small"
            checked={this.state.checked}
            onChange={this.handleTempChange}
            temp = {this.state.showTemp ? 'wi wi-fahrenheit': 'wi wi-celsius'}
            />
          
        
        </Days>
        
        </Show>
        )}
    }
    render() {


    return (
    <BtnDaysContainer>
        <BtnToggleWrap>
          <More onClick={this.handleThreeDayToggle}>
            MORE
          </More>
        
         

          </BtnToggleWrap>  
        <div>
        
        {this.forecastToggle()}
        </div>
    </BtnDaysContainer>
    );
    }
}

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}

export default connect(mapStateToProps)(ThreeDayForecast)