// import fetch from 'fetch'


/*
 * action types
 */

export const GO_TO_PREV_STEP = 'GO_TO_PREV_STEP';
export const GO_TO_NEXT_STEP = 'GO_TO_NEXT_STEP';
export const GO_TO_START = 'GO_TO_START';




/*
 * action creators
 */

export function goToPrevStep() {
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
