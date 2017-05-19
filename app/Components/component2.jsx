import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import Action from '../Redux/action';
import  Store from '../Redux/store';

class Component2 extends Component {
    constructor() {
        super();
        this.handleChange = function () {
            console.log('点击了按钮')
            Store.store.dispatch(Action.increaseAction);
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
                    Increase21
                </button>
            </div>
        );
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
        onIncreaseClick: () => dispatch(Action.increaseAction2)
    }
}


const App2 = connect(
    mapStateToProps2,
    mapDispatchToProps2
)(Component2)


export default App2;