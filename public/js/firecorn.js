var firebaseConfig = {
	apiKey: "AIzaSyBjsPigEMqitLCm-xKxx8eJsdsKhITcsZs",
	authDomain: "salady-98dad.firebaseapp.com",
	projectId: "salady-98dad",
	storageBucket: "salady-98dad.appspot.com",
	messagingSenderId: "284991245491",
	appId: "1:284991245491:web:f8915a89f96d8f4f2734c6",
	measurementId: "G-7M6R0H7RKY"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();