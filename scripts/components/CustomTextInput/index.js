import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import { RkTextInput, RkTheme } from 'react-native-ui-kitten';
import styles from './styles';

const { width, height } = Dimensions.get('window');

RkTheme.setType('RkTextInput', 'regular', {
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
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value) {
		const { handleChange } = this.props;
		handleChange(value);
	}
	render() {
		const { placeholder, type } = this.props;
		return (
			<TextInput
				placeholder={placeholder}
				style={{
					width: width * 0.55,
					height: 50
				}}
				underlineColorAndroid="#fff"
				onChangeText={this.handleChange}
			/>
		);
	}
}

export default CustomTextInput;
