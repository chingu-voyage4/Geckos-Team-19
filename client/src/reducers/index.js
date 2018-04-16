import { combineReducers } from 'redux';
import DateReducer from './reducer_date';
import MonthReducer from './reducer_month';
import YearReducer from './reducer_year';
import WeatherReducer from './reducer_weather';
import TempReducer from './reducer_temp';
import ZipReducer from './reducer_zip';
import todos from './reducer_todos';
import errors from './reducer_error';
import currentUser from './reducer_currentUser';
import todo from './reducer_todo';
import BoardTitle from './reducer_boardTitle';


const reducers = combineReducers({
    main: WeatherReducer,
    date: DateReducer,
    month: MonthReducer,
    year: YearReducer,
    temp: TempReducer,
    icon: WeatherReducer,
    input: ZipReducer,
    errors,
    currentUser,
    todo,
    boardTitle:BoardTitle
});



export default reducers;