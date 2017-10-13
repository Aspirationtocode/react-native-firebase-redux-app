import {
	START_FETCH_TODOS,
	FINISH_FETCH_TODOS,
	ADD_TODO,
	ERROR_FETCH_TODOS
} from '../constants';
import database from '../db';

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
				data: action.payload,
				error: null
			});
		}
		case ERROR_FETCH_TODOS: {
			return Object.assign({}, state, {
				fetched: false,
				fetching: false,
				error: action.payload
			});
		}
		case ADD_TODO: {
			const newTodos = [...state.data, action.payload];
			database.ref('todos/').set(newTodos);
			return Object.assign({}, state, {
				data: newTodos,
				error: null
			});
		}
		default: {
			return state;
		}
	}
};

export default todoListReducer;
