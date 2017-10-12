import { StyleSheet, Dimensions } from 'react-native';
import Color from 'color';

export default StyleSheet.create({
	listItem: {
		height: 102,
		padding: 13,
		marginBottom: 10,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: Color('#BE3333').alpha(0.59),
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	listItemLeftPart: {
		flex: 1,
		justifyContent: 'space-between'
	},
	listItemRightPart: {
		justifyContent: 'center'
	},
	listItemTitle: {
		color: '#fff',
		fontSize: 20
	}
});
