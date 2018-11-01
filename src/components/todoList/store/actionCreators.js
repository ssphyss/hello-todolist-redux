import * as constants from './constants';

// 10.
export const getInputChangeAction = (e) => ({
    type: constants.Add_ITEM,
    value: e
})

// 15.
export const getItemSubmitAction = () => ({
    type: constants.ITEM_SUBMIT
})




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