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


const p_cate = document.getElementById('p_cate');
const p_id = document.getElementById('p_id');
const p_name = document.getElementById('p_name');
const p_global = document.getElementById('p_global');
const p_kcal = document.getElementById('p_kcal');
const p_cal = document.getElementById('p_cal');
const p_sugars = document.getElementById('p_sugars');
const p_protein = document.getElementById('p_protein');
const p_fat = document.getElementById('p_fat');
const p_sat = document.getElementById('p_sat');
const p_mg = document.getElementById('p_mg');
const p_comment = document.getElementById('p_comment');
const p_img = document.getElementById('p_img');


const upload_btn = document.getElementById('upload_btn');


upload_btn.addEventListener('click', function () {
	const cate_val = p_cate.value;
	const id_val = Number(p_id.value);
	const name_val = p_name.value;
	const global_val = p_global.value;
	const kcal_val = Number(p_kcal.value);
	const cal_val = Number(p_cal.value);
	const sugars_val = Number(p_sugars.value);
	const protein_val = Number(p_protein.value);
	const fat_val = Number(p_fat.value);
	const sat_val =Number(p_sat.value);
	const mg_val = Number(p_mg.value);
	const comment_val = p_comment.value;
	const img_url = p_img.value;
	const img_file = p_img.files[0];

	var storageRef = storage.ref();
	var upload_url = storageRef.child('image/'+ img_file.name );
	var upload = upload_url.put(img_file);
	upload .on( 'state_changed', 
    // 변화시 동작하는 함수 
    null, 
    //에러시 동작하는 함수
    (error) => {
      console.error('에러내역', error);
    }, 
    // 성공시 동작하는 함수
    () => {
      upload .snapshot.ref.getDownloadURL().then((url) => {
		const img_url = url;
		db.collection('menu/product/warmbol').add({
			p_cate : cate_val,
			p_id : id_val,
			p_name : name_val,
			p_global : global_val,
			p_kcal : kcal_val,
			p_cal : cal_val,
			p_sugars : sugars_val,
			p_protein : protein_val,
			p_fat : fat_val,
			p_sat : sat_val,
			p_mg : mg_val,
			p_comment : comment_val,	
		    p_img : img_url
		  }).then((result) => {
			//성공시 실행
			console.log(result)
			alert("업로드 성공")
			location.href = "./list_menu.html";
		  }).catch((err) => {
			  //실패시 실행
			  console.log(err)
			  alert("업로드 실패")
		  });
      });
    }
);

	// if ((cate_val == "")) {
	// 	alert("카테고리를 선택해주세요.");
	// 	p_cate.focus();
	// 	return false;
	// }
	// if ((id_val == "")) {
	// 	alert("고유번호를 작성해주세요.");
	// 	p_id.focus();
	// 	return false;
	// }
	// if ((name_val == "")) {
	// 	alert("상품명을 작성해주세요.");
	// 	p_name.focus();
	// 	return false;
	// }
	// if ((global_val == "")) {
	// 	alert("영문명을 작성해주세요.");
	// 	p_global.focus();
	// 	return false;
	// }
	// if ((kcal_val == "")) {
	// 	alert("칼로리를 작성해주세요.");
	// 	p_kcal.focus();
	// 	return false;
	// }
	// if ((cal_val == "")) {
	// 	alert("탄수화물을 작성해주세요.");
	// 	p_cal.focus();
	// 	return false;
	// }
	// if ((sugars_val == "")) {
	// 	alert("당분을 작성해주세요.");
	// 	p_sugars.focus();
	// 	return false;
	// }
	// if ((protein_val == "")) {
	// 	alert("단백질을 작성해주세요.");
	// 	p_protein.focus();
	// 	return false;
	// }
	// if ((fat_val == "")) {
	// 	alert("지방을 작성해주세요.");
	// 	p_fat.focus();
	// 	return false;
	// }
	// if ((sat_val == "")) {
	// 	alert("포화지방을 작성해주세요.");
	// 	p_sat.focus();
	// 	return false;
	// }
	// if ((mg_val == "")) {
	// 	alert("나트륨을 작성해주세요.");
	// 	p_mg.focus();
	// 	return false;
	// }
	// if ((comment_val == "")) {
	// 	alert("상품설명을 작성해주세요.");
	// 	p_comment.focus();
	// 	return false;
	// }

	// if ((img_val == "")) {
	// 	alert("상품 이미지를 첨부해주세요.")
	// 	return false;
	// }
})