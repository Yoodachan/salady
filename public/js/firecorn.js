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


//유저 정보 확인
const get_name = localStorage.getItem('user');
const user_name = document.getElementById('user_name');

//로그인 여부 확인
firebase.auth().onAuthStateChanged((user)=>{
	if (user) {
		console.log(user)
		console.log(user.uid);
		console.log(user.displayName);
		localStorage.setItem('user',JSON.stringify(user))
		user_name.innerHTML = JSON.parse(get_name).displayName;
	}
});




//logout

// const logout = document.getElementById('logout');
// logout.addEventListener('click', function () {
// 	logout.auth().signOut();
// 	localStorage.removeItem('user')
// })