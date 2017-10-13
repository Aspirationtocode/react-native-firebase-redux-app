import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';
import inputDataReducer from './inputDataReducer';

const allReducers = combineReducers({
	todoList: todoListReducer,
	inputData: inputDataReducer
});

export default allReducers;
