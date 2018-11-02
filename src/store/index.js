/**
 * store 就是我們當前項目的倉庫， 
 * 我們可以在store存儲我們項目中的用到的所有數據。
 *  Redux 應用中只有一個單一的store。
 */

import { createStore } from 'redux';
import reducer from './reducer';

// const store = createStore(reducer);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;