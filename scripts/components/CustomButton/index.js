import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { RkButton, RkTheme } from 'react-native-ui-kitten';
import styles from './styles';

const { width, height } = Dimensions.get('window');

RkTheme.setType('RkButton', 'regular', {
	fontSize: 16,
	backgroundColor: 'rgba(0, 0, 0, .87)',
	width: 113,
	height: 36,
	borderRadius: 3
});

RkTheme.setType('RkButton', 'in-progress--active', {
	fontSize: 15,
	backgroundColor: 'rgba(0, 0, 0, .87)',
	width: 105,
	height: 34,
	borderRadius: 17,
	borderWidth: 1,
	borderColor: '#fff'
});

class CustomButton extends Component {
	constructor() {
		super();
	}
	render() {
		const { text, type } = this.props;
		return <RkButton rkType={type}>{text}</RkButton>;
	}
}

export default CustomButton;
