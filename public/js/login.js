const u_id = document.getElementById('u_id');
const pwd = document.getElementById('pwd');
const login_btn = document.getElementById('login_btn')
//파이어 베이스 로그인
login_btn.addEventListener('click',() => {
	firebase.auth().signWithEmailAndPassword(u_id,pwd).then( (result) => {
		console.log(result.user)
	} )
})


//logout
// logout.auth().signOut();