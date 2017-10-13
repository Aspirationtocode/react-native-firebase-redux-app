import uniqId from 'uniq-id';
import {
	START_FETCH_TODOS,
	FINISH_FETCH_TODOS,
	ERROR_FETCH_TODOS,
	CHANGE_INPUT_DATA,
	ADD_TODO
} from './constants';
import database from './db';

export function fetchTodos(dispatch) {
	return () => {
		dispatch({ type: START_FETCH_TODOS });
		database
			.ref('/todos')
			.once('value')
			.then(snapshot => {
				const todos = snapshot.val();
				if (todos) {
					dispatch({ type: FINISH_FETCH_TODOS, payload: todos });
				} else {
					throw Error('Todos not there..');
				}
			})
			.catch(error => {
				dispatch({ type: ERROR_FETCH_TODOS, payload: error });
			});
	};
}

export function changeInputData(inputData) {
	return { type: CHANGE_INPUT_DATA, payload: inputData };
}

export function errorFetchTodos(error) {
	return { type: ERROR_FETCH_TODOS, payload: error };
}

export function addTodo(todoTitle) {
	const currentTodo = { title: todoTitle, completed: false, key: uniqId() };
	return { type: ADD_TODO, payload: currentTodo };
}
