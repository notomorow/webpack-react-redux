import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux'
import { Router, Route } from 'react-router'
import thunk from 'redux-thunk';
import run from './run.js'
import myReducer from './reducer.js'

console.log('myReducer' + myReducer)


// React component
class Component1 extends Component {
    render() {
        const { value, value2, onIncreaseClick, onIncreaseClick2 } = this.props;
        console.log(this.props)
        return (
            <div>
                <span>{value} + {value2}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onIncreaseClick2}>Increase2</button>
            </div>
        )
    }
}

class Component2 extends Component {
    constructor() {
        super();
        this.handleChange = function () {
            store.dispatch(increaseAction);
        }
    }
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>{value}
                <button onClick={this.handleChange}>
                    Increase
                </button>
                <button onClick={onIncreaseClick}>
                    Increase2
                </button>
            </div>
        );
    }
}

// Action
const increaseAction = { type: 'increase' }
const increaseAction2 = { type: 'increase2' }




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
const store = createStore(myReducer)
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer.js', () => {
        const nextReducer = require('./reducer.js');
        store.replaceReducer(myReducer);
    });
}

const store2 = createStore(counter2)


if (module.hot) {
    console.log('-')
}



// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count,
        value2: state.count2
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onIncreaseClick2: () => dispatch(increaseAction2)
    }
}



function mapStateToProps2(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps2(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction2)
    }
}



// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component1)


const App2 = connect(
    mapStateToProps2,
    mapDispatchToProps2
)(Component2)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('example')
);
/*ReactDOM.render(
    <Provider store={store2}>
        <App2 />
    </Provider>
    , document.getElementById("exm2")
);*/

if (module.hot) {
    module.hot.accept();
}