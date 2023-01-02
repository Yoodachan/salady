const query_string = new URLSearchParams(window.location.search);

const url_cate = query_string.get('p_cate');


const title_img = document.getElementsByClassName('menu_title_box')[0];
const menu_title = document.getElementsByClassName('menu_title')[0];
const menu_comment = document.getElementsByClassName('menu_title_comment')[0];
const cate_all = document.getElementsByClassName('cate_all')[0];
const cate_warm = document.getElementsByClassName('cate_warm')[0];
const cate_salady = document.getElementsByClassName('cate_salady')[0];
const cate_sand = document.getElementsByClassName('cate_sand')[0];
const cate_wrap = document.getElementsByClassName('cate_wrap')[0];
const cate_item = document.querySelectorAll('.cate_item');



function cate_load () {
	if (url_cate == "wrap") {
		title_img.style.backgroundImage = "url(./images/list_title_img_003.png)";
		menu_title.innerHTML = "랩/웜랩";
		menu_comment.innerHTML = "또띠아로 돌돌 말아낸 맛있고 간편한 랩/웜랩과 <br/> 씹을수록 고소한 귀리번이 매력적인 샌드";
		cate_wrap.classList.remove('cate_item');
		cate_wrap.classList.add('cate_select');
		db.collection('menu/product/warmbol').where("p_cate", "==" , "wrap" ).get().then((snapshot)=>{

			//값 다 가져옴
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
		
			<a href="./detail.html?id=${doc.id}&p_cate=${doc.data().p_cate}" class="prd_after_wrap prd_view_off">
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
		
			const product = document.querySelectorAll('.product');
			const prd_after_wrap = document.querySelectorAll('.prd_after_wrap');
			const prd_text_wrap_after = document.querySelectorAll('.prd_text_wrap_after');
			const prd_comment = document.querySelectorAll('.prd_comment');
			const prd_link_icon = document.querySelectorAll('.prd_link_icon');
		
			product.forEach( (e,i) => {
			
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
	}
	if (url_cate == "salady") {
		title_img.style.backgroundImage = "url(./images/list_title_img_002.png)";
		menu_title.innerHTML = "샐러디";
		menu_comment.innerHTML = "누구나 맛있게 즐길 수 있도록 <br/> 100% 국내산 프리미엄 채소로만 구성된 샐러디";
		cate_salady.classList.remove('cate_item');
		cate_salady.classList.add('cate_select');
		db.collection('menu/product/warmbol').where("p_cate", "==" , "salady" ).get().then((snapshot)=>{

			//값 다 가져옴
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
		
			<a href="./detail.html?id=${doc.id}&p_cate=${doc.data().p_cate}" class="prd_after_wrap prd_view_off">
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
		
			const product = document.querySelectorAll('.product');
			const prd_after_wrap = document.querySelectorAll('.prd_after_wrap');
			const prd_text_wrap_after = document.querySelectorAll('.prd_text_wrap_after');
			const prd_comment = document.querySelectorAll('.prd_comment');
			const prd_link_icon = document.querySelectorAll('.prd_link_icon');
		
			product.forEach( (e,i) => {
			
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
	}
	if (url_cate == "warm_bowl") {
		title_img.style.backgroundImage = "url(./images/list_title_img_001.png)";
		menu_title.innerHTML = "웜볼";
		menu_comment.innerHTML = "신선한 채소 베이스 위에 따끈한 통곡물 밥이 더해져 <br/> 더욱 든든하게 즐길 수 있는 웜볼";
		cate_warm.classList.remove('cate_item');
		cate_warm.classList.add('cate_select');
		db.collection('menu/product/warmbol').where("p_cate", "==" , "warm_bowl" ).get().then((snapshot)=>{

			//값 다 가져옴
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
		
			<a href="./detail.html?id=${doc.id}&p_cate=${doc.data().p_cate}" class="prd_after_wrap prd_view_off">
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
		
			const product = document.querySelectorAll('.product');
			const prd_after_wrap = document.querySelectorAll('.prd_after_wrap');
			const prd_text_wrap_after = document.querySelectorAll('.prd_text_wrap_after');
			const prd_comment = document.querySelectorAll('.prd_comment');
			const prd_link_icon = document.querySelectorAll('.prd_link_icon');
		
			product.forEach( (e,i) => {
			
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
	}
	if (url_cate == "sand") {
		title_img.style.backgroundImage = "url(./images/list_title_img_003.png)";
		menu_title.innerHTML = "샌드";
		menu_comment.innerHTML = "또띠아로 돌돌 말아낸 맛있고 간편한 랩/웜랩과 <br/> 씹을수록 고소한 귀리번이 매력적인 샌드";
		cate_sand.classList.remove('cate_item');
		cate_sand.classList.add('cate_select');
		db.collection('menu/product/warmbol').where("p_cate", "==" , "sand" ).get().then((snapshot)=>{

			//값 다 가져옴
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
		
			<a href="./detail.html?id=${doc.id}&p_cate=${doc.data().p_cate}" class="prd_after_wrap prd_view_off">
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
		
			const product = document.querySelectorAll('.product');
			const prd_after_wrap = document.querySelectorAll('.prd_after_wrap');
			const prd_text_wrap_after = document.querySelectorAll('.prd_text_wrap_after');
			const prd_comment = document.querySelectorAll('.prd_comment');
			const prd_link_icon = document.querySelectorAll('.prd_link_icon');
		
			product.forEach( (e,i) => {
			
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
	}
	
	if (url_cate == null ) {
		title_img.style.backgroundImage = "url(./images/list_title_img_001.png)";
		menu_title.innerHTML = "ALL";
		menu_comment.innerHTML = "샐러디의 다양한 메뉴를 즐겨보세요!";
		cate_all.classList.remove('cate_item');
		cate_all.classList.add('cate_select');
		db.collection('menu/product/warmbol').orderBy("p_id").get().then((snapshot)=>{

			//값 다 가져옴
			
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
		
			<a href="./detail.html?id=${doc.id}&p_cate=${doc.data().p_cate}" class="prd_after_wrap prd_view_off">
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
		
			const product = document.querySelectorAll('.product');
			const prd_after_wrap = document.querySelectorAll('.prd_after_wrap');
			const prd_text_wrap_after = document.querySelectorAll('.prd_text_wrap_after');
			const prd_comment = document.querySelectorAll('.prd_comment');
			const prd_link_icon = document.querySelectorAll('.prd_link_icon');
		
			product.forEach( (e,i) => {
			
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

	}
}

cate_load();


const admin_upload = document.getElementsByClassName('admin_upload')[0];



//로그인 여부 확인
firebase.auth().onAuthStateChanged((user)=>{
	// 로그인 했을 경우
	if (user) {
		admin_upload.classList.remove('admin_view_off')
		admin_upload.classList.add('admin_view_on')
	}
	else {
		admin_upload.classList.remove('admin_view_on')
		admin_upload.classList.add('admin_view_off')
	}
});
