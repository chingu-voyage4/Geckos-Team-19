import React, { Component } from 'react';
import ZipButton from '../components/zipButton';
import { fetchZip } from '../actions/zip';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '../actions/store';
import { Div, ItemTemp, ListTemp, ItemBtn, Icon, List, InfoList, InfoItem, InputBar, InputButton } from '../styles/--weather';
import TempButton from '../components/tempButton';


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
    isValidZip = (postalCode, countryCode) => {
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
    //handle temp change event
    handleTempChange = (event) => {

        this.setState(prevState => ({
            tempKind: !prevState.tempKind
        }));
        if (this.state.tempKind) {
            // this.setState({
            //     displayTemp: this.state.temp
            // });
            store.getState().input.temp = store.getState().input.temp
        } else {
            store.getState().input.temp = ((store.getState().input.temp - 32) * 5 / 9).toFixed(0);
        }
    }


    //click event to pass info to <Input />
    handleClick = (event) => {
        if (this.isValidZip(this.state.zip, store.getState().input.country)) {
            event.preventDefault();
            this.props.fetchZip(this.state.zip);
            //add show state so information shows onClick of zip button
            this.setState({ show: true });
        } else if (this.state.zip === '') {
            event.reload(false);
        } else {
            alert("Please enter a valid zip code");
        }
       
    }
  
    render() {
        if (this.state.show === false) {
            return (
                <div style={{ textAlign: "center" }}>
                    <InputBar
                        placeholder="zip code"
                        onChange={this.onChange}></InputBar>
                    <InputButton>
                        <ZipButton onClick={this.handleClick} />
                    </InputButton>
                </div>)
        } else {
            return (
                <Div>
                    <div style={{ textAlign: "center" }}>
                        <InputBar
                            placeholder="zip code"
                            onChange={this.onChange}></InputBar>
                        <InputButton>
                            <ZipButton onClick={this.handleClick} />
                        </InputButton>
                    </div>
                    <List>
                        <h3>{store.getState().input.city}</h3>
                        <Icon>
                            <i className={store.getState().input.icon}></i>
                        </Icon>
                        <InfoList>
                            <InfoItem >Wind {store.getState().input.wind}mph</InfoItem>
                            <InfoItem >{store.getState().input.main}</InfoItem>
                            <InfoItem >Humidity {store.getState().input.humidity}%</InfoItem>
                        </InfoList>
                        <button>toggle placeholder</button>
                        <ListTemp>
                            <ItemTemp>
                                {store.getState().input.temp}

                            </ItemTemp>
                            <ItemBtn>
                                <TempButton
                                    onClick={this.handleTempChange}
                                    tempkind={this.state.tempKind ? 'wi wi-celsius' : 'wi wi-fahrenheit'} />
                            </ItemBtn>
                        </ListTemp>

                    </List>

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