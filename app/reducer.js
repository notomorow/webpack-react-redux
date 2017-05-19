import Action from './Redux/action';
function add(state) {
    let obj = Object.assign({}, state);

    obj.count++;
    return obj;
}
function add2(state) {
    let obj = Object.assign({}, state);

    obj.count2 += 12;
    return obj;
}


export default function counter(state = { count: 0, count2: 0 }, action) {
    // let count = state.count
    // let count2 = state.count2
    switch (action.type) {
        case Action.increaseAction.type:
            return add(state);
        case Action.increaseAction2.type:
            return add2(state);
        default:
            return state;
    }
}
