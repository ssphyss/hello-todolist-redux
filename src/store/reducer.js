/**
 * Redux 應用中只有一個單一的store。
 * 如果需要對數據進行拆分， 可以把數據存儲在多個reducer中， 
 * 然後使用combineReducers() 將多個reducer 合併為一個。
 */

// 1. 引入
// import { combineReducers } from  'redux';
// 改引用redux-immutable
import { combineReducers } from  'redux-immutable';

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