import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyC_jHC7n-kOGgjqrrXX8IbqaqMKnd78C3k",
	authDomain: "electron-todos.firebaseapp.com",
	databaseURL: "https://electron-todos.firebaseio.com",
	projectId: "electron-todos",
	storageBucket: "electron-todos.appspot.com",
	messagingSenderId: "583323678012",
	appId: "1:583323678012:web:2fe94c8baedb190e4b5a39",
});

export { firebaseConfig as firebase };
