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


const log_name = document.getElementsByClassName('log_name')[0];
const log_check = document.getElementsByClassName('log_check')[0];
const log_list = document.getElementsByClassName('log_list')[0];
const log_info = document.getElementsByClassName('log_info')[0];
const log_out = document.getElementsByClassName('log_out')[0];

//로그인 여부 확인
firebase.auth().onAuthStateChanged((user)=>{
	// 로그인 했을 경우
	if (user) {
		console.log(user)
		console.log(user.uid);
		console.log(user.displayName);
		console.log(user.photoURL);
		localStorage.setItem('user',JSON.stringify(user))
		log_name.innerHTML = JSON.parse(get_name).displayName +"님";
		log_name.setAttribute("href","javascript:void(0)")
		log_check.innerHTML = "로그아웃"	
		log_check.removeAttribute("href")
		log_check.classList.add('log_out');
	}
	else {
		log_name.innerHTML = "회원가입"
		log_check.innerHTML = "로그인"	
	}
});


log_check.addEventListener('click', ()=>{
if (log_check.classList.contains('log_out')) {
	firebase.auth().signOut()
	localStorage.removeItem('user')
	log_check.classList.remove('log_out');
	log_name.createAttribute("href")
	log_name.setAttribute("href","./login.html")
}
})