const login_btn = document.getElementById('login_btn')
const u_id = document.getElementById('u_id');
const pwd = document.getElementById('pwd');
//파이어 베이스 로그인
login_btn.addEventListener('click',() => {
	console.log(u_id.value)
	console.log(pwd.value)

	firebase.auth().signInWithEmailAndPassword(u_id.value, pwd.value).then((result)=>{
		console.log(result.user)
		alert("로그인 성공")
		location.href="./index.html";
	  }).catch( () => {
        alert("로그인 실패");
        location.href = "login.html"  
    });

});


//logout
// logout.auth().signOut();