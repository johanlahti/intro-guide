// import fetch from 'fetch'


/*
 * action types
 */

export const GO_TO_PREV_STEP = 'GO_TO_PREV_STEP';
export const GO_TO_NEXT_STEP = 'GO_TO_NEXT_STEP';
export const GO_TO_START = 'GO_TO_START';
export const GO_TO_INDEX = 'GO_TO_INDEX';




/*
 * action creators
 */

export function goToPrevStep(prevStepIndex, maxStepIndex) {
	if (prevStepIndex === 0) {
		return dispatch => {
			dispatch(goToIndex(maxStepIndex));
		}
	}
	return { type: GO_TO_PREV_STEP, payload: {} };
}

export function goToNextStep(prevStepIndex, maxStepIndex) {
	if (prevStepIndex >= maxStepIndex) {
		return dispatch => {
			dispatch(goToStart());
		}
	}
	return { type: GO_TO_NEXT_STEP, payload: {} };
}

export function goToStart() {
	return { type: GO_TO_START, payload: {} };
}

export function goToIndex(stepIndex) {
	return { type: GO_TO_INDEX, payload: { stepIndex } };
}
