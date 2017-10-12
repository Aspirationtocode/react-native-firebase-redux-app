import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from 'color';
import { LinearGradient } from 'expo';
import { Text, View } from 'react-native';
import styles from './styles';
import CustomButton from '../CustomButton';
class ListItem extends Component {
	constructor() {
		super();
	}
	render() {
		const { title, completed } = this.props;
		return (
			<LinearGradient
				colors={[
					Color('#000')
						.alpha(0.89)
						.toString(),
					Color('#000')
						.alpha(0.19)
						.toString()
				]}
				style={styles.listItem}
			>
				<View style={styles.listItemLeftPart}>
					<Text style={styles.listItemTitle}>{title}</Text>
					<CustomButton text="in progress" type="in-progress--active" />
				</View>
				<View style={styles.listItemRightPart}>
					<Icon name="delete-forever" size={51} color="#fff" />
				</View>
			</LinearGradient>
		);
	}
}

export default ListItem;
