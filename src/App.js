import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/todoList';
import store from './store'

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<div>
				<TodoList />
			</div>
		</Provider>
    );
  }
}

export default App;
