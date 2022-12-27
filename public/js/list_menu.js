const query_string = new URLSearchParams(window.location.search);

const url_cate = query_string.get('p_cate');

const cate_all = document.getElementsByClassName('cate_all')[0];
const cate_warm = document.getElementsByClassName('cate_warm')[0];
const cate_salady = document.getElementsByClassName('cate_salady')[0];
const cate_sand = document.getElementsByClassName('cate_sand')[0];
const cate_wrap = document.getElementsByClassName('cate_wrap')[0];
const cate_item = document.querySelectorAll('.cate_item');

function cate_load () {
	if (url_cate == "wrap") {
		// cate_item.forEach((result) => {
		// 	result.classList.remove('cate_select')
		// })
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
