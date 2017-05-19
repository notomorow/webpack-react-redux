import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import Action from '../Redux/action';
// React component
class Component1 extends Component {
    render() {
        const { value, value2, onIncreaseClick, onIncreaseClick2 } = this.props;
        return (
            <div>
                <span>{value} + {value2}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onIncreaseClick2}>Increase002</button>
            </div>
        )
    }
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
        onIncreaseClick: () => dispatch(Action.increaseAction),
        onIncreaseClick2: () => dispatch(Action.increaseAction2)
    }
}
const App1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component1)

export default App1;