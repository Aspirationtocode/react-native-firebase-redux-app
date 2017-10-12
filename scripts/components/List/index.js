import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import CustomTextInput from '../CustomTextInput';
import CustomButton from '../CustomButton';
import ListItem from '../ListItem';

class List extends Component {
	render() {
		return (
			<FlatList
				style={styles.list}
				data={[
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false },
					{ title: 'Play with React.js', completed: false }
				]}
				renderItem={({ item }) => (
					<ListItem title={item.title} completed={item.completed} />
				)}
			/>
		);
	}
}

export default List;
