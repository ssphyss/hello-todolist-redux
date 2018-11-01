import React from 'react';
import { TodoListWrapper, Section, Todo, TodoLists, TodoItems, FormCheckboxGroup, TodoContent, TodoActions } from './style';
import { connect } from 'react-redux';
// 統一從store裡面取就好
import { actionCreators } from './store';

class TodoList extends React.Component{
    render(){
        console.log(this.props.focused)
        return(
            <TodoListWrapper>
                <Section>
                    <Todo>
                        <span className="heading-primary--main">Todo List</span>
                        <span className="heading-primary--sub">Built by Phy  for her CSS AND SASS. Copyright © by Phy.</span>                   
                        <TodoLists>
                            <h5>代辦清單</h5>
                            <TodoItems>
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

                            <h5>已完成</h5>                            
                            <TodoItems className="todo__item--complete">
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

                            <h5>新增任務</h5>                            
                            <TodoItems className="todo__item--add">
                                <TodoContent>
                                    <input className="form__input" placeholder="請輸入" type="text" />
                                </TodoContent>
                                <TodoActions>
                                    <a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
                                    <a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
                                </TodoActions>
                            </TodoItems>
                        </TodoLists>
                    </Todo>
                </Section>                
            </TodoListWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.todoList.focused,
        // 改成調用immutable數據
        // focused: state.todoList.get('focused'),


        focused: state.get('todoList').get('focused'),
        // focused: state.getIn(['todoList','focused'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(TodoList);