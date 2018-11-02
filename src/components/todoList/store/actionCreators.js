import * as constants from './constants';

/**
 * TodoAdd (value)
 * */

// 10.輸入框變更偵測
export const getInputChangeAction = (value) => ({
    type: constants.ADD_CHANGE,
    value: value
})

// 15.送出新增
export const getItemSubmitAction = () => ({
    type: constants.ADD_SUBMIT
})


/**
 * TodoItem (value,index)
 * */

// 24.輸入框變更偵測
export const getListChangeAction = (value, index) => ({
    type: constants.ITEM_CHANGE,
    payload: {value, index}
})

// 30.刪除
export const getListDeleteAction = (index) => ({
    type: constants.ITEM_DELETE,
    payload: {index}
})

// 35.變更勾選
export const getCheckboxAction = (index) => ({
    type: constants.CHECKBOX_CHANGE,
    payload: {index}
})