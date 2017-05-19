import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route } from 'react-router'
import thunk from 'redux-thunk';
import  Store from './Redux/store';
import App1 from './Components/component1.jsx';
import App2 from './Components/component2.jsx'




// if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducer.js', () => {
//         const nextReducer = require('./reducer.js');
//         store.replaceReducer(myReducer);
//     });
// }



ReactDOM.render(
    <Provider store={Store.store}>
        <App1 />
    </Provider>,
    document.getElementById('example')
);
ReactDOM.render(
    <Provider store={Store.store2}>
        <App2 />
    </Provider>
    , document.getElementById("exm2")
);

if (module.hot) {
    module.hot.accept();
}