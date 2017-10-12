import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import { RkTextInput, RkTheme } from 'react-native-ui-kitten';
import styles from './styles';

const { width, height } = Dimensions.get('window');

RkTheme.setType('RkTextInput', 'frame', {
	input: {
		marginLeft: 0,
		color: '#fff'
	},
	container: {
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		width: width * 0.55
	},
	placeholderTextColor: '#fff'
});

class CustomTextInput extends Component {
	render() {
		return (
			<RkTextInput
				placeholder="Enter task..."
				rkType="frame"
				placeholderTextColor="#fff"
			/>
		);
	}
}

export default CustomTextInput;
