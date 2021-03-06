import {
	START_FETCH_TODOS,
	FINISH_FETCH_TODOS,
	ADD_TODO,
	CHANGE_INPUT_DATA
} from '../constants';

const initialState = '';

const todoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_INPUT_DATA: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default todoListReducer;
