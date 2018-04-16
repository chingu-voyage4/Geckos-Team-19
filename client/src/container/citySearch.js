import React, {Component} from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/api';
import { store } from '../actions/store';
import Weather from '../container/weather';




/* eslint-disable react/prop-types */
const renderSuggestion = ({ formattedSuggestion }) => (
  <div >
    <i  />
    <strong>{formattedSuggestion.mainText}</strong>{' '}
    <small >{formattedSuggestion.secondaryText}</small>
  </div>
);
/* eslint-enable react/prop-types */


// const cssClasses = {
//   root: 'form-group',
//   input: 'Demo__search-input',
//   autocompleteContainer: 'Demo__autocomplete-container',
// };

const shouldFetchSuggestions = ({ value }) => value.length > 2;

const onError = (status, clearSuggestions) => {
  /* eslint-disable no-console */
  console.log(
    'Error happened while fetching suggestions from Google Maps API',
    status
  );
  /* eslint-enable no-console */
  clearSuggestions();
};

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      geocodeResults: null,
      loading: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true,
    });

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          lat: lat,
          lng: lng,
          loading: false
        });
      })
      
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null,
    });
  }



  renderGeocodeSuccess(lat, lng) {
      this.props.fetchWeather(lng, lat);
      console.log(store.getState())
      return (
        <div>
        </div>
    );
  }

  render() {
    const myStyles = {
      root: { position: 'relative' },
      input: { width: '140px',
               outline:0,
               marginLeft: '10px',
               height:'10px',
               backgroundColor: "rgba(0,0,0,0)",
               borderRadius: "3px",
               border: "2px white solid",
               color:"white",
               
               //alignSelf: 'flex-start'
               },
      autocompleteContainer: { transition:".2s all`",
                               zIndex:1 ,
                               width:'100%',
                              fontSize:13},
      autocompleteItem: { color: 'black',
                          backgroundColor: 'white' },
      autocompleteItemActive: { color: 'white',
                                backgroundColor: 'darkgray' }
    }
   
    const wheelStyle = {
      margin: '10px auto',
      height: '30px',
      width: '50%',
   }

    const wheelColor= {
      color:"white",
      height: '30px',
      width: '50%',
    }


    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: 'Get Weather',
    };

    return (
     <div>
        <PlacesAutocomplete 
          styles={myStyles}
          renderSuggestion={renderSuggestion}
          // renderFooter={renderFooter}
          inputProps={inputProps}
          // classNames={cssClasses}
          onSelect={this.handleSelect}
          onEnterKeyDown={this.handleSelect}
          onError={onError}
          shouldFetchSuggestions={shouldFetchSuggestions}
        />
        {this.state.loading && (
          <div style={wheelStyle}>
            <i style={wheelColor} className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" />
          </div>
        )}
        {this.state.geocodeResults && (
          <div>{this.state.geocodeResults}</div>
        )}
        </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        lat: state.lat,
        lng: state.lng,
        geocodeResults: state.geocodeResults,
        loading: state.loading,
        
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch )

