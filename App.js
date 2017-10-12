import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TodoList from './scripts/components/TodoList';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TodoList />
			</View>
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
