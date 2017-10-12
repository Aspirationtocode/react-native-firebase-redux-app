import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList,
	ScrollView,
	ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import CustomTextInput from '../CustomTextInput';
import CustomButton from '../CustomButton';
import ListItem from '../ListItem';
import { fetchTodos } from '../../actions';

class List extends Component {
	constructor() {
		super();
	}
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(fetchTodos(dispatch));
	}
	render() {
		const { todoList } = this.props;
		const { fetching } = todoList;
		return fetching ? (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="#BE3333" />
			</View>
		) : (
			<FlatList
				style={styles.list}
				data={todoList.data}
				renderItem={({ item }) => (
					<ListItem title={item.title} completed={item.completed} />
				)}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		todoList: state.todoList
	};
};

export default connect(mapStateToProps)(List);
