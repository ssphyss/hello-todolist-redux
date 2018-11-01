// 1. 引入
import { combineReducers } from  'redux';
// 2. 傳入小的reducer
import { reducer as todoListReducer } from './../components/todoList/store';

const reducer = combineReducers ({
    // abc : todoListReducer
    todoList : todoListReducer
})
export default reducer;




// 搬到./../components/todoList/store/reducer.js
// const defaultState = {
//     focused: true
// }
// export default (state = defaultState, action) => {
//     return state;
// }