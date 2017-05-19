import { createStore, combineReducers, applyMiddleware } from 'redux';
import myReducer from '../../reducer.js';

// Action

function add(state) {
    let obj = Object.assign({}, state);

    obj.count++;
    return obj;
}



// Reducer

function counter2(state = { count: 0 }, action) {
    switch (action.type) {
        case 'increase2':
            return add(add(state))
        default:
            return state
    }
}

// Store
const store = createStore(myReducer);
const store2 = createStore(counter2)

export default {store: store, store2: store2}