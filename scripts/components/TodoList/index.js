import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import CustomTextInput from '../CustomTextInput';
import CustomButton from '../CustomButton';
import List from '../List';

class TodoList extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.text}>TODO LIST</Text>
					<View style={styles.headerInnerBottom}>
						<CustomTextInput />
						<CustomButton text="ADD" type="regular" />
					</View>
				</View>
				<List />
			</View>
		);
	}
}

export default TodoList;
