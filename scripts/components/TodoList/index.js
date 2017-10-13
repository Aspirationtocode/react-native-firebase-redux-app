import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import styles from './styles';
import CustomTextInput from '../CustomTextInput';
import CustomButton from '../CustomButton';
import List from '../List';
import { changeInputData, addTodo } from '../../actions';

class TodoList extends Component {
	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitButtonPress = this.handleSubmitButtonPress.bind(this);
	}
	handleInputChange(value) {
		const { inputData, dispatch } = this.props;
		dispatch(changeInputData(value));
	}
	handleSubmitButtonPress() {
		const { inputData, dispatch } = this.props;
		dispatch(addTodo(inputData));
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.text}>TODO LIST</Text>
					<View style={styles.headerInnerBottom}>
						<CustomTextInput
							handleChange={this.handleInputChange}
							placeholder="Enter task..."
							type="regular"
						/>
						<CustomButton
							handlePress={this.handleSubmitButtonPress}
							text="ADD"
							type="regular"
						/>
					</View>
				</View>
				<List />
			</View>
		);
	}
}

const mapStateToProps = state => ({
	inputData: state.inputData
});

export default connect(mapStateToProps)(TodoList);
