import React, { Component } from 'react';
import ZipButton from '../components/zipButton';
import { fetchZip } from '../actions/zip';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '../actions/store';
import { Div, ItemTemp, ListTemp, ItemBtn, Icon, List, InfoList, InfoItem } from '../styles/--weather';
import TempButton from '../components/tempButton';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: '',
            error: null,
            tempKind: false
        }
    }


    onChange = (event) => {
        this.setState({ zip: event.target.value });
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.fetchZip(this.state.zip);
       
    }

    render() {
        return (
            <Div>
                <div style={{textAlign: "center"}}>
                    <input
                        placeholder="zip code"
                        onChange={this.onChange}></input>
                    <ZipButton onClick={this.handleClick} />
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
                                onClick={this.handleClick}
                                className={this.state.tempKind ? 'wi wi-celsius' : 'wi wi-fahrenheit'} />
                        </ItemBtn>
                    </ListTemp>

                </List>

            </Div>
        )
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