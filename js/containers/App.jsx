

import React, { Component, PropTypes } from 'react'
import { CanvasWithHole } from '../components/CanvasWithHole.jsx'
import { IntroBox } from '../components/IntroBox.jsx'
import { Navigation } from '../components/Navigation.jsx'
import { connect } from 'react-redux'
import * as actions from '../actions/actions.js'

class App extends Component {
	render() {
		// Injected by connect() call:
		const { dispatch, step, stepIndex, maxStepIndex } = this.props;
		return (
			<div className="ig-maincontainer">
				<CanvasWithHole selector={step.selector} />
				<Navigation 
					onPrev={ e => dispatch( actions.goToPrevStep( stepIndex, maxStepIndex ) ) } 
					onNext={ e => dispatch( actions.goToNextStep( stepIndex, maxStepIndex ) ) }
				/>
				<IntroBox 
					title={step.title} 
					description={step.description} 
					selector={step.selector} 
				/>
			</div>
		)
	}
}

App.propTypes = {
	step: PropTypes.object.isRequired
}

function propsToInject(state) {
	return {
		step: state.steps[state.stepIndex],
		stepIndex: state.stepIndex,
		maxStepIndex: state.steps.length - 1
	}
}


// Wrap the component to inject dispatch and state into it
export default connect(propsToInject)(App)