

import React, { Component, PropTypes } from 'react'
import { SmartCanvasWithHole } from '../components/SmartCanvasWithHole.jsx'
import { IntroBox } from '../components/IntroBox.jsx'
import { connect } from 'react-redux'
import * as actions from '../actions/actions.js'

class App extends Component {
	render() {
		// Injected by connect() call:
		const { dispatch, step, stepIndex, maxStepIndex } = this.props;
		return (
			<div>
				<SmartCanvasWithHole selector={step.selector} />
				<IntroBox 
					title={step.title} 
					description={step.description} 
					onPrev={ e => dispatch( actions.goToPrevStep() ) } 
					onNext={ e => dispatch( actions.goToNextStep( stepIndex, maxStepIndex ) ) }
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