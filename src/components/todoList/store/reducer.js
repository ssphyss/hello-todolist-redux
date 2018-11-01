import * as constants from './constants';
const defaultState = {
    focused: 123
}
export default (state = defaultState, action) => {
    return state;
}

// 範例
// export default (state = defaultState, action) => {
//     if (action.type === constants.SEARCH_FOCUS) {
//         return {
//         	focused: true
//         }
//     }
//     if (action.type === constants.SEARCH_BLUR) {
//         return {
//         	focused: false
//         }
//     }
//     return state;
// }