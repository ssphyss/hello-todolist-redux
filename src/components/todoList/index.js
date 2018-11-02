import React from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import { TodoListWrapper, Section, Todo, TodoLists } from './style';
import { connect } from 'react-redux';
// 統一從store裡面取就好
// import { actionCreators } from './store';

class TodoList extends React.Component{

    render(){

        // console.log('index---------inputValue：',this.props.inputValue);
        // console.log('index---------list：',this.props.list);

        // console.log('index---------list：',this.props.list[1].type);
        // 27.
        const filterNo = this.props.list.filter((item) => {
			if(item.type === "no"){
				return item
            }
            return false
		})
		const filterOk = this.props.list.filter((item) => {
			if(item.type === "ok"){
				return item
            }
            return false
        })
        
        return(
            <TodoListWrapper>
                <Section>
                    <Todo>
                        <span className="heading-primary--main">Todo List</span>
                        <span className="heading-primary--sub">Built by Phy  for her CSS AND SASS. Copyright © by Phy.</span>                   
                        <TodoLists>
                            <h5>代辦清單</h5>
                            {/* 18 */}
                            {
								filterNo.map((item, index)=>{
									return (
                                        <TodoItem 		
                                            // inputValue是list裡面每一個的inputValue
                                            // index 是索引	
                                            key={item.id}
                                            index={item.id}
                                            num={index}
                                            content={item.inputValue} 
                                            type={item.type}                                       
										/>
									)
								})
							}               

                            <h5>已完成</h5>
                            {/* <TodoItem /> */}
                            {/* 28. */}
                            {
								filterOk.map((item, index)=>{
									return (
                                        <TodoItem 		
                                            // inputValue是list裡面每一個的inputValue
                                            // index 是索引	
                                            key={item.id}
                                            index={item.id}
                                            num={index}
                                            content={item.inputValue}   
                                            type={item.type}                                         
										/>
									)
								})
							}  
                            <h5>新增任務</h5>
                            <TodoAdd />
                        </TodoLists>
                    </Todo>
                </Section>                
            </TodoListWrapper>
        )
    }
}

/**
 * 在react中， 容器組件可以使用connect() 方法訪問store。
 * 使用connect() 時， 使用mapStateToProps這個函數
 * 來指定當前Redux store state 中需要映射到展示組件的props 中的數據， 
 * 使用mapDispatchToProps() 方法接收dispatch() 方法
 * 並返回期望注入到展示組件的props 中的回調方法。
 */

const mapStateToProps = (state) => {
    return {
        // focused: state.todoList.focused,
        // 改成調用immutable數據
        // focused: state.todoList.get('focused'),

        // focused: state.get('todoList').get('focused'),
        // focused: state.getIn(['todoList','focused'])

        inputValue: state.getIn(['todoList','inputValue']),
        list: state.getIn(['todoList','list'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(TodoList);