import React from 'react';
import { TodoListWrapper, Section, Todo, TodoLists, TodoItem, FormCheckboxGroup, TodoContent, TodoActions } from './style';

export default class TodoList extends React.Component{
    render(){
        return(
            <TodoListWrapper>
                <Section>
                    <Todo>
                        <span className="heading-primary--main">Todo List</span>
                        <span className="heading-primary--sub">Built by Phy  for her CSS AND SASS. Copyright © by Phy.</span>                   
                        <TodoLists>
                            <h5>代辦清單</h5>
                            <TodoItem>
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
                            </TodoItem>

                            <h5>已完成</h5>
                            <TodoItem className="todo__item--complete">
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
                            </TodoItem>

                            <h5>新增任務</h5>
                            <TodoItem className="todo__item--add">
                                <TodoContent>
                                    <input className="form__input" placeholder="請輸入" type="text" />
                                </TodoContent>
                                <TodoActions>
                                    <a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
                                    <a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
                                </TodoActions>
                            </TodoItem>
                        </TodoLists>
                    </Todo>
                </Section>                
            </TodoListWrapper>
        )
    }
}