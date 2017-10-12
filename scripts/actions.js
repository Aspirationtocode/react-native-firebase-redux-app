import { START_FETCH_TODOS, FINISH_FETCH_TODOS } from './constants';
import firebase from 'firebase';
const config = {
	apiKey: 'AIzaSyAV7U8A2ZpSfoa8y-Haf5Xz2o4dQrlh3Xw',
	authDomain: 'react-native-firebase-redux.firebaseapp.com',
	databaseURL: 'https://react-native-firebase-redux.firebaseio.com',
	projectId: 'react-native-firebase-redux',
	storageBucket: '',
	messagingSenderId: '937099131444'
};
firebase.initializeApp(config);
const database = firebase.database();
export function fetchTodos(dispatch) {
	return () => {
		dispatch({ type: START_FETCH_TODOS });
		database
			.ref('/data')
			.once('value')
			.then(function(snapshot) {
				const todos = snapshot.val();
				dispatch({ type: FINISH_FETCH_TODOS, payload: todos });
			});
	};
}
