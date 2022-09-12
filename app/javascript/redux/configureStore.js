import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greeting/greeting'

const reducer = combineReducers({
  greetingReducer,
});

const store = configureStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;