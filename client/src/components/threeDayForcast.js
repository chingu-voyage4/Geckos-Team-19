import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { store } from '../actions/store';
import {Hide, Show, ToggleContainer,  VertLine, DayName, FCToggle, Icon, Days,BtnToggleWrap,FadeIn, Text,ThreeDayInfo , OneDay, BtnDaysContainer} from '../styles/--threeDayForecast';
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
<<<<<<< HEAD
        }
    handleTempChange(){
        this.setState(prevState => ({
            tempKind: !prevState.tempKind
        }));
    }
    handleClick() {
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    returnTemp = (day) => {
        if(this.state.tempKind === false){
=======
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
>>>>>>> new-test
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
<<<<<<< HEAD
    
    forecastToggle() {
        if(this.state.isToggleOn === false){
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
            <button onClick={this.handleClick}>
            3 Day Forcast
            </button>
            <Label>
                {/* <SliderCheckbox type="checkbox" onClick={this.handleTempChange}/>
                <Slider/> */}
                <ToggleSwitch
                checked={this.state.checked}
                onChange={(event) => {
                this.setState({ checked: !this.state.checked,
                                showTemp: this.state.checked ? "F" : "C" ,
                                tempKind: this.state.checked ? false : true });
                                }
                        }
/>
            </Label>
        <div>
            {this.forecastToggle()}
        </div>
        </div>
        );
    }
=======

    render() {
    
        const ToggleStyle = {
               marginLeft:"8px",
               height:'14px',
            //    color:"white",
        }

    return (
           <FadeIn>
        <Days>
        <ToggleContainer>
                    <FCToggle>F</FCToggle>
                    <ToggleSwitch
                    style = {ToggleStyle}     
                    size = "small"
                    checked={this.state.checked}
                    onChange={this.handleTempChange}
                    temp = {this.state.showTemp ? 'wi wi-fahrenheit': 'wi wi-celsius'}
                    />
                    <FCToggle>C</FCToggle>
                </ToggleContainer>    

            <OneDay>
              <DayName>{weekday[d.getDay()]}</DayName>
                <Text>{store.getState().main.main}</Text>
                <Text>{this.returnTemp('day1')}</Text>
                 <Icon className={store.getState().main.icon}></Icon>
            </OneDay>

           
           
            <OneDay>
              <DayName>{weekday[d.getDay()+1]}</DayName>
          
                <Text>{store.getState().main.main}</Text>
                <Text>{this.returnTemp('day2')}</Text>
                <Icon className={store.getState().main.icon}></Icon>
   
            </OneDay>
 


            <OneDay>
              <DayName>{weekday[d.getDay()+2]}</DayName>

                <Text>{store.getState().main.main}</Text>
                <Text>{this.returnTemp('day3')}</Text>
                <Icon className={store.getState().main.icon}></Icon>
             
            </OneDay>

            
          
           
           </Days>
          </FadeIn>
    
        );
>>>>>>> new-test
    }
}

function mapStateToProps(state) {
    return {
        temp: state.temp
    };
}

export default connect(mapStateToProps)(ThreeDayForecast)