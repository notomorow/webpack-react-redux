console.log(2222222222)
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
export default function counter(state = { count: 0, count2: 0 }, action) {
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