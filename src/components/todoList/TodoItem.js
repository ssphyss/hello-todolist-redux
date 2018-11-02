import React from 'react';
import { TodoItems, FormCheckboxGroup, TodoContent, TodoActions } from './style';
// 1.
import { connect } from 'react-redux';

import { actionCreators } from './store';

class TodoItem extends React.Component{
    render(){
        // 4.
        //  console.log('TodoItem---------inputValue：',this.props.inputValue);
        //  console.log('TodoItem---------list：',this.props.list);
        //  console.log('TodoItem---------list：', this.props.list[0]);
        //  console.log('this.props.index：', this.props.index);

        return(
            // 33.
            <TodoItems className={this.props.type==="no" ? 'todo__item': 'todo__item--complete'}>
                {/* 19. */}
                <span>{this.props.index}</span>
                <FormCheckboxGroup>
                    <input 
                        onChange={()=>this.props.handleChangeType(this.props.index)}
                        type="checkbox" className="form__checkbox-input" id={this.props.index} />
                    <label htmlFor={this.props.index} className="form__checkbox-label">
                        <span className="form__checkbox-button"></span>									         
                    </label>
                </FormCheckboxGroup>
                <TodoContent>                    
                    <input
                        // 21.改變時,要帶值、index索引
                        value={this.props.content}
                        onChange={(e) => this.props.handleInputChange(e, this.props.index)}

                        // 不用作了,在input時已經同時改變store的值
                        // onBlur={this.props.handleInputToSpan}
                        className="form__input" placeholder="請輸入" type="text" 
                    />
                    {/* 20. */}
                    <span>{this.props.content}</span>
                </TodoContent>
                <TodoActions>
                    <a 
                        // 27. (同時)輸入框變更偵測
                        onClick={this.props.handleInputChange}
                        href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
                    <a 
                        // 28.刪除，要帶index索引
                        onClick={(e)=> this.props.handleItemDelete(e, this.props.index)}
                        href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除
                    </a>
                </TodoActions>
            </TodoItems>
        )
    }
}

const mapState = (state) => {
	return {
        inputValue: state.getIn(['todoList','inputValue']),
        list: state.getIn(['todoList','list'])
	}
}

const mapDispath = (dispatch) => {
    return {
        // 22.輸入框變更偵測，要帶值、index索引
        handleInputChange(e, index) { 
            e.preventDefault();            
            // 23.
            const action = actionCreators.getListChangeAction(e.target.value, index);
            dispatch(action);
        },

        // 29.刪除，要帶index索引
        handleItemDelete(e, index) { 
            e.preventDefault();
            const action = actionCreators.getListDeleteAction(index);
            dispatch(action);
        },

        // 34.變更checkbox 勾選狀態，要帶index索引
        handleChangeType(index){
            const action = actionCreators.getCheckboxAction(index);
            dispatch(action);
        }
    }
}

export default connect(mapState, mapDispath)(TodoItem);