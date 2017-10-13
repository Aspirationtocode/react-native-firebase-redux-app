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

export default database;
