import React from 'react';
import { TodoItems, FormCheckboxGroup, TodoContent, TodoActions } from './style';
// 1.
import { connect } from 'react-redux';

class TodoItem extends React.Component{
    render(){
         // 4.
         console.log('TodoItem---------inputValue：',this.props.inputValue);
         console.log('TodoItem---------list：',this.props.list);

        return(
            <TodoItems className='todo__item--complete'>
                <FormCheckboxGroup>
                    <input type="checkbox" className="form__checkbox-input" id="r4" />
                    <label htmlFor="r4" className="form__checkbox-label">
                        <span className="form__checkbox-button"></span>									         
                    </label>
                </FormCheckboxGroup>
                <TodoContent>
                    <input className="form__input" placeholder="請輸入" type="text" />
                </TodoContent>
                <TodoActions>
                    <a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
                    <a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
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

// 2.
export default connect(mapState, null)(TodoItem);