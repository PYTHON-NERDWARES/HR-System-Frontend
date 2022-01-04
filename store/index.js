import {createStore, combineReducers} from 'redux';
import stateReducer from './states';

const reducers = combineReducers({stateReducer});

const store = () => {
    return createStore(reducers);
}

export default store();