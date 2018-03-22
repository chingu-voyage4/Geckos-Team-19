import { combineReducers } from 'redux';
import TimeReducer from './reducer_time';
import DateReducer from './reducer_date';
import MonthReducer from './reducer_month';
import YearReducer from './reducer_year';
import WeatherReducer from './reducer_weather';
import TempReducer from './reducer_temp';

const reducers = combineReducers({
    weather: WeatherReducer,
    time: TimeReducer,
    date: DateReducer,
    month: MonthReducer,
    year: YearReducer,
    temp: TempReducer
});



export default reducers;