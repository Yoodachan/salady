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
db.collection('menu/product/warmbol').get().then((snapshot)=>{
  snapshot.forEach(( doc ) => {
	var menu_list = document.querySelector('.menu_list')

	let temp = document.createElement('li')
	temp.classList.add('product');
	temp.innerHTML = 
	`
	<div class="prd_before_wrap">
	  <img class="prd_img" src="${doc.data().p_img} " title="${doc.data().p_name}" >
	  <span class="prd_text_wrap_before"> 
		<strong class="prd_name_before"> ${doc.data().p_name} </strong>
		${doc.data().p_global} 
	  </span>
	  <span class="prd_kcal"> ${doc.data().p_kcal} kcal</span>
	</div>

	<a href="#" class="prd_after_wrap prd_view_off">
	  <span class="prd_text_wrap_after text_down"> 
		<strong class="prd_name_after"> ${doc.data().p_name} </strong>
		${doc.data().p_global} 
	  </span>
	  <span class="prd_comment text_down_hidden"> ${doc.data().p_comment} </span>
	  <span class="prd_link_icon text_scale">
		<i class="fa-solid fa-magnifying-glass"></i>
	  </span>
	</a>
	`
	menu_list.append(temp);

	var product = document.querySelectorAll('.product');
	var prd_before_wrap = document.querySelectorAll('.prd_before_wrap');
	var prd_name_before = document.querySelectorAll('.prd_name_before');
	var prd_text_wrap_before = document.querySelectorAll('.prd_text_wrap_before');
	var prd_name_after = document.querySelectorAll('.prd_name_after');

	var prd_after_wrap = document.querySelectorAll('.prd_after_wrap');
	var prd_text_wrap_after = document.querySelectorAll('.prd_text_wrap_after');
	var prd_comment = document.querySelectorAll('.prd_comment');
	var prd_link_icon = document.querySelectorAll('.prd_link_icon');

	product.forEach( (e,i) => {
		console.log(product.length)
	
		e.addEventListener('mouseenter', function () {
	
		prd_after_wrap[i].classList.remove('prd_view_off');
		prd_text_wrap_after[i].classList.remove('text_down');
		prd_comment[i].classList.remove('text_down_hidden');
		prd_link_icon[i].classList.remove('text_scale');
		
		});
	
		e.addEventListener('mouseleave', function () {

		prd_after_wrap[i].classList.add('prd_view_off');
		prd_text_wrap_after[i].classList.add('text_down');
		prd_comment[i].classList.add('text_down_hidden');
		prd_link_icon[i].classList.add('text_scale');

		})
	
	});

  })
})


      // <h5 class="p_name"> 상품명 ${doc.data().p_name} </h5>
	  //<h5 class="p_name"> 글로벌 ${doc.data().p_global} </h5>
	  //<h5 class="p_name"> 설명 ${doc.data().p_comment} </h5>
      // <p class="p_kcal"> 칼로리  ${doc.data().p_kcal} </p>
      // <p class="p_kcal"> 탄수화물 ${doc.data().p_cal} </p>
      // <p class="p_kcal"> 당류 ${doc.data().p_sugars} </p>
      // <p class="p_kcal"> 단백질 ${doc.data().p_protein} </p>
      // <p class="p_kcal"> 지방 ${doc.data().p_fat} </p>
      // <p class="p_kcal"> 포화지방 ${doc.data().p_sat} </p>
      // <p class="p_kcal"> 나트륨 ${doc.data().p_mg} </p>
      // <p class="float-end">♥0</p>

