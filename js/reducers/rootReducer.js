import { combineReducers } from 'redux'
import {
	GO_TO_PREV_STEP,
	GO_TO_NEXT_STEP,
	GO_TO_START,
	GO_TO_INDEX

} from '../actions/actions'


function stepIndex(state=0, action) {
	switch (action.type) {
		case GO_TO_PREV_STEP:
			return state > 0 ? state - 1 : 0;
		case GO_TO_NEXT_STEP:
			return state + 1;
		case GO_TO_START:
			return 0;
		case GO_TO_INDEX:
			return action.payload.stepIndex;
		default:
			return state;
	}
	return state;
}

function steps(state=[], action) {
	return state;
}

const rootReducer = combineReducers({
	stepIndex,
	steps
});

export default rootReducer;
