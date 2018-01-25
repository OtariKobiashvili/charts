import { combineReducers } from 'redux';
import allCoinsReducer from './reducer_AllCoins';


const rootReducer = combineReducers({
  coins: allCoinsReducer,
});

export default rootReducer;
