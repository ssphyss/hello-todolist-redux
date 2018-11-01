import React from 'react';
import { TodoItems, TodoContent, TodoActions } from './style';

export default class TodoAdd extends React.Component{
    render(){
        return(
            <TodoItems className="todo__item--add">
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