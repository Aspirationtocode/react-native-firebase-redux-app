import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TodoList from './scripts/components/TodoList';

import allReducers from './scripts/reducers';

let store = createStore(allReducers, applyMiddleware(thunk));

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<TodoList />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, .87)'
	}
});
