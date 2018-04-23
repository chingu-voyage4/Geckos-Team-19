import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { store } from '../actions/store';
import {Hide, Show, Day1, Day2, Day3, VertLine} from '../styles/--threeDayForecast';
import {ListItems} from '../styles/--weather';
import {Label, Slider, SliderCheckbox } from '../styles/--toggleSwitch';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
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
            <ListItems>
                <Day1>
                <h3>{weekday[d.getDay()]}</h3>
                <p>{store.getState().main.main}</p>
                <p>{this.returnTemp('day1')}</p>
                <i className={store.getState().main.icon}></i>
                </Day1>
                <VertLine/>
                <Day2>
                <h3>{weekday[d.getDay()+1]}</h3>
                <p>{store.getState().main.main}</p>
                <p>{this.returnTemp('day2')}</p>
                <i className={store.getState().main.icon}></i>
                </Day2>
                <VertLine/>
                <Day3>
                <h3>{weekday[d.getDay()+2]}</h3>
                <p>{store.getState().main.main}</p>
                <p>{this.returnTemp('day3')}</p>
                <i className={store.getState().main.icon}></i>
                </Day3>
            </ListItems>
            </Show>
            )}
      }
      render() {
        return (
        <div>
            <button onClick={this.handleThreeDayToggle}>
            3 Day Forcast
            </button>
            <Label>
              {/* <SliderCheckbox type="checkbox" onClick={this.handleTempChange}/>
              <Slider/> */}
              <ToggleSwitch
              checked={this.state.checked}
              onChange={this.handleTempChange}/>
            </Label>
          <div>
          {this.forecastToggle()}
          </div>
        </div>
        );
      }
    }

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}

export default connect(mapStateToProps)(ThreeDayForecast)