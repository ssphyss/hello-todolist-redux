import React, { Component } from 'react';
import { TodoItems, TodoContent, TodoActions } from './style';
// 1.connect
import { connect } from 'react-redux';
// 9.
import { actionCreators } from './store';

class TodoAdd extends Component{

    render(){
        // 5.
        // console.log('TodoAdd---------inputValue：',this.props.inputValue);
        console.log('TodoAdd---------list：',this.props.list);

        return(
            <TodoItems className="todo__item--add">
                <TodoContent>
                    <input
                        // 6.讀取input值,偵測變更
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                        className="form__input" placeholder="請輸入" type="text" />
                </TodoContent>
                <TodoActions>
                    <a 
                        // 13.送出新增
                        onClick={this.props.handleItemSubmit}
                        href='./'><i className="todo__icon icon-basic-todolist-pen"></i>送出</a>
                    <a href='./'><i className="todo__icon icon-basic-trashcan"></i>取消</a>
                </TodoActions>
            </TodoItems>
        )
    }
}

// 3.
const mapState = (state) => {
	return {
        inputValue: state.getIn(['todoList','inputValue']),
        list: state.getIn(['todoList','list'])
	}
}

// 4.
const mapDispath = (dispatch) => {
    return {
        // 7.輸入框變更偵測
        handleInputChange(e) {
            console.log('輸入框變更偵測',e.target.value);
            // 8.
            const action = actionCreators.getInputChangeAction(e.target.value);
            dispatch(action);
        },
        // 14.送出新增
        handleItemSubmit(e){
            e.preventDefault();
            const action = actionCreators.getItemSubmitAction();
            dispatch(action);
        }
    }
}
// 2.
export default connect(mapState, mapDispath)(TodoAdd);