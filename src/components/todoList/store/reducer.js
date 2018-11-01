import * as constants from './constants';
import { fromJS } from 'immutable';


// 把數據對象轉化成immutable對象
const defaultState = fromJS(
    {
        focused: 123
    }
)
export default (state = defaultState, action) => {
    return state;
}

// 範例
// export default (state = defaultState, action) => {
//     if (action.type === constants.SEARCH_FOCUS) {

//         // 引入immutable
//         // immutable對象的set方法,會結合之前的immutable對象的值
//         // 和設置的值.返回一個全新的對象
//         return state.set('focused', true);
//     }
//     if (action.type === constants.SEARCH_BLUR) {

//         return state.set('focused', false);
//     }
//     return state;
// }

// 範例
// const defaultState = {
//     focused: 123
// }
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