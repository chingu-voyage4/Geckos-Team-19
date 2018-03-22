import { combineReducers } from 'redux';
import TimeReducer from './reducer_time';
import DateReducer from './reducer_date';
import MonthReducer from './reducer_month';
import YearReducer from './reducer_year';
import WeatherReducer from './reducer_weather';
import TempReducer from './reducer_temp';

const reducers = combineReducers({
    main: WeatherReducer,
    time: TimeReducer,
    date: DateReducer,
    month: MonthReducer,
    year: YearReducer,
    temp: TempReducer,
    wind: WeatherReducer,
    humidity: WeatherReducer,
    city: WeatherReducer
});



export default reducers;