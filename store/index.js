import {createStore, combineReducers , applyMiddleware } from 'redux';
import stateReducer from './states';
import thunk from 'redux-thunk'

const reducers = combineReducers({stateReducer});

const store = () => {
    return createStore(reducers,applyMiddleware(thunk));
}

export default store();