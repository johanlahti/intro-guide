

import React, { Component, PropTypes } from 'react'
import AddTodo from '../components/AddTodo.jsx'
import TodoList from '../components/TodoList.jsx'
import Footer from '../components/Footer.jsx'

class App extends Component {
	render() {
		// Injected by connect() call:
		const { dispatch, step } = this.props
		return (
			<div>
				<IntroBox title={step.title} description={step.description} />
				// <AddTodo
				// 	onAddClick={text =>
				// 		dispatch(addTodo(text))
				// 	} />
				// <TodoList
				// 	todos={visibleTodos}
				// 	onTodoClick={index =>
				// 		dispatch(completeTodo(index))
				// 	} />
				// <Footer
				// 	filter={visibilityFilter}
				// 	onFilterChange={nextFilter =>
				// 		dispatch(setVisibilityFilter(nextFilter))
				// 	} />
			</div>
		)
	}
}

App.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})),
	visibilityFilter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

function selectTodos(todos, filter) {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed)
	}
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	}
}

// Wrap the component to inject dispatch and state into it
export default App //connect(select)(App)