import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greeting/greeting'

const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;