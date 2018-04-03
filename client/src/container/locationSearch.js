import React, { Component } from 'react';
import ZipButton from '../components/zipButton';
import { fetchZip } from '../actions/zip';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '../actions/store';
import { Div, ItemTemp, ListTemp, ItemBtn, Icon, List, InfoList, InfoItem, InputBar, InputButton, CityName, FlexInput, FlexInfo, ReturnedState, FlexTemp } from '../styles/--weather';
import TempButton from '../components/tempButton';
import SimpleForm from './citySearch';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: '',
            error: null,
            tempKind: false,
            show: false
        }
        this.handleTempChange = this.handleTempChange.bind(this);
      
    }


    onChange = (event) => {
        this.setState({ zip: event.target.value });
    }
    //validate zip code; CA and US
    isValidZip = (postalCode, countryCode,) => {
        let postalCodeRegex;
    switch (countryCode) {
        case "US":
            postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
            break;
        case "CA":
            postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
            break;
        default:
            postalCodeRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
    }
    return postalCodeRegex.test(postalCode);
    }

    
    //click event to pass info to <Input />
    handleClick = (event) => {
        if (this.isValidZip(this.state.zip, store.getState().input.country) && (this.state.zip != '')){
            event.preventDefault();
            this.props.fetchZip(this.state.zip);
            //add show state so information shows onClick of zip button
            this.setState({ show: true });
            console.log("yes zip");
        } else if (this.state.zip === '') {
            alert("please enter a zip code");
        } else {
            alert("Please enter a valid zip code");
        }
       
    }


    //handle temp change event
    handleTempChange = (event) => {

        this.setState(prevState => ({
            tempKind: !prevState.tempKind
        }));
        if (this.state.tempKind) {
            // this.setState({
            //     displayTemp: this.state.temp
            // });
            store.getState().input.tempC = store.getState().input.temp
        } else {
            store.getState().input.tempC = ((store.getState().input.tempC - 32) * 5 / 9).toFixed(0);
        }
    }


  
    render() {
        if (this.state.show === false) {
            return (
                <div style={{ textAlign: "center" }}>

                {/* <FlexInput>


                    <InputBar
                        placeholder="zip code"
                        onChange={this.onChange}></InputBar>
                  
                        <ZipButton onClick={this.handleClick} />

                 </FlexInput> */}
                 <SimpleForm/>
                </div>)
        } else {
            return (
                <Div>

                    <SimpleForm/>
                    {/* <div style={{ width:"auto" }}>


                       <FlexInput>
                          <InputBar
                              placeholder="zip code"
                              onChange={this.onChange}></InputBar>
                            <ZipButton onClick={this.handleClick} />
                           </FlexInput>
                       <CityName>{store.getState().input.city}</CityName>
                    </div>
                   
                    
                    <List>
                   
                        
                        <FlexInfo>
                            <ListTemp>
                                <FlexTemp>
                                    <ItemTemp>
                                        {store.getState().input.tempC}
                                   </ItemTemp>
                         
                                        <TempButton
                                            onClick={this.handleTempChange}
                                            tempkind={this.state.tempKind ? 'wi wi-celsius' : 'wi wi-fahrenheit'} />
                                
                                </FlexTemp>
                            </ListTemp>
                               
                                <InfoList>
                                    <InfoItem >wind:<ReturnedState> {store.getState().input.wind}mph </ReturnedState></InfoItem>
                                    <InfoItem >conditions: <ReturnedState>{store.getState().input.main}</ReturnedState></InfoItem>
                                    <InfoItem >humidity:<ReturnedState> {store.getState().input.humidity}%</ReturnedState></InfoItem>
                                </InfoList>
                            </FlexInfo>


                            <Icon>
                            <i className={store.getState().input.icon}></i>
                            </Icon>

                        {/* <button>toggle placeholder</button> 
                        
                       
                    </List> */}

               
                </Div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        temp_input: state.temp_input,
        input: state.input
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchZip }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)