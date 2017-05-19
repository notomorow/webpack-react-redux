function add(state) {
    var obj = Object.assign({}, state);
    obj.count++;
    return obj;
}
function add2(state) {
    var obj = Object.assign({}, state);
    obj.count2 += 1112;
    console.log(11)
    return obj;
}



function counter(state = { count: 0, count2: 0 }, action) {
    const count = state.count
    const count2 = state.count2
    switch (action.type) {
        case 'increase':
            return add(state)
        case 'increase2':
            return add2(state)
        default:
            return state
    }
}

function counter2(state = { count: 0 }, action) {
    switch (action.type) {
        case 'increase2':
            return add(add(state))
        default:
            return state
    }
}

export default {
    counter: counter,
    counter2: counter2
}

if (module.hot) {
    module.hot.accept();
}