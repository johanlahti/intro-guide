import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import rootReducer from './reducers/rootReducer'
import * as actions from './actions/actions.js'

// import { config } from './config'

// const localStorageMiddleware = ({getState}) => {
// 	return (next) => (action) => {
// 		const result = next(action)
// 		localStorage.setItem('applicationState', JSON.stringify(
// 			getState()
// 		))
// 		return result
// 	}
// }


export class IntroGuideComponent extends Component {
	
	getStore(config) {
		const createStoreWithMiddleware = 
			applyMiddleware(
				thunk
				// localStorageMiddleware
			)
			(createStore)

		const store = createStoreWithMiddleware(rootReducer, config);	
		return store;
	}

	render() {
		const { dispatch, config } = this.props;
		return (
			<App store={ this.getStore(config) }></App>
		)
	}
}



export function create(rootElement, config) {
	// const rootElement = document.querySelector("#intro");

	return {
		rootElement: rootElement,
		config: config,

		destroy: function() {

		},

		goToLast: function() {
			this.config.stepIndex = 2;
			// render(
			// 	<IntroGuideComponent config={ this.config } />,
			// 	this.rootElement
			// )
		},

		start: function() {
			render(
				<IntroGuideComponent config={ this.config } />,
				this.rootElement
			)
		},

		stop: function() {

		}
	}


}

