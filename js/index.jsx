import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import rootReducer from './reducers/rootReducer'
// import * as actions from './actions/actions'
import { config } from './config'

// const localStorageMiddleware = ({getState}) => {
// 	return (next) => (action) => {
// 		const result = next(action)
// 		localStorage.setItem('applicationState', JSON.stringify(
// 			getState()
// 		))
// 		return result
// 	}
// }

const createStoreWithMiddleware = 
		applyMiddleware(
			thunk
			// localStorageMiddleware
		)
		(createStore)

console.log(config);

const store = createStoreWithMiddleware(rootReducer, {
	steps: config.steps,  // static, will not change
	stepIndex: 0
});

const rootElement = document.querySelector("#intro");
// <Provider store={store}>
// </Provider>,
render(
	<App store={store}></App>,
	rootElement
)