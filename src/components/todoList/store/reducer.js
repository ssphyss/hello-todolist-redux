import * as constants from './constants';
import { fromJS } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = fromJS( {
    inputValue: '1',
    list: [
        {id: "1",inputValue: "111000", type: "no" },
        {id: "2",inputValue: "222000", type: "ok" }
    ]	
})

export default (state = defaultState, action) => {
    // 12.
    if (action.type === constants.Add_ITEM) {        
        return state.set('inputValue', action.value);
    }

    // 17.
    if (action.type === constants.ITEM_SUBMIT) { 
        console.log("-----state.list", state.get('list'))
        const list = state.get('list').concat({
            id: `${Math.floor(Math.random( )*1000)}`,
            inputValue: state.get('inputValue'),
            type: 'no'
        })
        state.inputValue = '';
        return state.set('list', list).set('inputValue', state.inputValue);
    }
    return state;
}

// const newListItem = {
//     // id: this.state.inputValue,         // 用輸入的字當id
//     id: `${Math.floor(Math.random( )*1000)}`,
//     inputValue: this.state.inputValue,  // 輸入的字
//     type: "no"
// }
// this.setState({
//     list : [...this.state.list, newListItem],
//     inputValue: ''
// })
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