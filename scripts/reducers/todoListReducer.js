import { START_FETCH_TODOS, FINISH_FETCH_TODOS } from '../constants';

const initialState = {
	fetched: false,
	fetching: false,
	data: [],
	error: null
};

const todoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCH_TODOS: {
			return Object.assign({}, state, {
				fetching: true
			});
		}
		case FINISH_FETCH_TODOS: {
			return Object.assign({}, state, {
				fetched: true,
				fetching: false,
				data: action.payload
			});
		}
		default: {
			return state;
		}
	}
};

export default todoListReducer;
