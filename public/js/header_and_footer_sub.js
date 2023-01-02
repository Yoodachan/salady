

// gnb 랜덤 캐릭터

// const chara = ["chara_001","chara_002","chara_003","chara_004","chara_005"];
// const gnb_left = document.getElementsByClassName('gnb_left')[0];
// const gnb_model = document.createElement("img");
// const rd_chara = chara[Math.floor(Math.random() * (chara.length))];
// gnb_model.src = `./images/${rd_chara}.png`;
// gnb_model.classList.add('gnb_model','model_off');
// gnb_left.appendChild(gnb_model);
// gnb_left.addEventListener('click', function () {
// 	const rd_chara = chara[Math.floor(Math.random() * (chara.length))];
// 	gnb_model.src = `./images/${rd_chara}.png`;
// })

// const model_move = document.getElementsByClassName('gnb_model')[0];

// // 모델 애니메이션

// // nav 메뉴
// // mouseleave

const header = document.getElementById('header');
const nav = document.getElementById('nav');
const logo_img = document.getElementsByClassName('logo_img')[0];
const mbtn_img = document.getElementsByClassName('mbtn_img')[0];
const gnb_wrap = document.getElementsByClassName('gnb_wrap')[0];
const gnb_depth = document.getElementsByClassName('gnb_depth')[0];
const nav_menu_cate = document.querySelectorAll('.nav_menu_cate');
const nav_menu_item = document.querySelectorAll('.nav_menu_item');


let news_menu = document.getElementById('news_menu');
let news_item = document.getElementsByClassName('news')[0];

let list_menu = document.getElementById('list_menu');
let list_item = document.getElementsByClassName('list')[0];

let brand_menu = document.getElementById('brand_menu');
let brand_item = document.getElementsByClassName('brand')[0];

let franchise_menu = document.getElementById('franchise_menu');
let franchise_item = document.getElementsByClassName('franchise')[0];

let order_menu = document.getElementById('order_menu');
let order_item = document.getElementsByClassName('order')[0];


nav.addEventListener('mouseenter', function () {
	let d_width = document.body.clientWidth;

	if (d_width > 1140 ) {
	// 헤더 on/off
	header.classList.remove('header_off');
	header.classList.add('header_on');

 	// 네브 on/off
	nav.classList.remove('nav_off');
	nav.classList.add('nav_on');

	//로고 on/off
	logo_img.classList.remove('logo_hover_off');
	logo_img.classList.add('logo_hover_on');

	//버튼 on/off
	mbtn_img.classList.remove('mbtn_img_off');
	mbtn_img.classList.add('mbtn_img_on');

	//GNB 색변경
	gnb_wrap.classList.add('gnb_on');
	gnb_wrap.classList.remove('gnb_off');
	}

});


header.addEventListener('mouseleave', function () {

	// 헤더 on/off
	header.classList.remove('header_on');
	header.classList.add('header_off');

	// 네브 on/off
	nav.classList.remove('nav_off');
	nav.classList.add('nav_on');

	//로고 on/off
	logo_img.classList.remove('logo_hover_off');
	logo_img.classList.add('logo_hover_on');

});


// 네브 사이드 메뉴 버튼


const nav_mbtn_wrap = document.getElementsByClassName('nav_mbtn_wrap')[0];
const nav_mbtn = document.getElementsByClassName('nav_mbtn')[0];
const close_btn = document.getElementsByClassName('close_btn')[0];
const all_menu = document.getElementsByClassName('all_menu')[0];
const user_info = document.getElementsByClassName('user_info')[0];
const user_info_menu = document.getElementsByClassName('user_info_menu')[0];

nav_mbtn_wrap.addEventListener('mouseenter', () => {
	if (header.classList.contains('header_on')) {
		header.classList.remove('header_on');
		header.classList.add('header_off');
	}
});

user_info.addEventListener('click', ()=> {
	if (user_info_menu.classList.contains('info_menu_off')) {
		user_info_menu.classList.remove('info_menu_off');
		user_info_menu.classList.add('info_menu_on');
	}
	else {
		user_info_menu.classList.remove('info_menu_on');
		user_info_menu.classList.add('info_menu_off');
	}
})


// 히든메뉴 온오프

nav_mbtn.addEventListener('click', () => {
		all_menu.classList.remove('all_menu_off');
		all_menu.classList.add('all_menu_on');
});

close_btn.addEventListener('click', () => {
		all_menu.classList.remove('all_menu_on');
		all_menu.classList.add('all_menu_off');
});


const all_menu_cate_select = document.querySelectorAll('.all_menu_cate_select');
all_menu_cate_select.forEach(function(q,i) {

	const all_menu_cate_item = document.querySelectorAll('.all_menu_cate_item');
	const all_menu_cate_selected = document.querySelectorAll('.all_menu_cate_selected');
	q.addEventListener("mouseenter", 
	function () {


		all_menu_cate_select.forEach(function(r){
			r.classList.add('select_color_off');
			r.classList.remove('select_color_on');
		})
		all_menu_cate_select[i].classList.remove('select_color_off');
		all_menu_cate_select[i].classList.add('select_color_on');


		
		all_menu_cate_item.forEach( function(q){
			q.classList.add('cate_off');
			q.classList.remove('cate_on');
		})

		all_menu_cate_item[i].classList.add('cate_on');
		all_menu_cate_item[i].classList.remove('cate_off');


		all_menu_cate_selected.forEach( function(q){
			q.classList.add('selected_off');
			q.classList.remove('selected_on');
		})

		all_menu_cate_selected[i].classList.add('selected_on');
		all_menu_cate_selected[i].classList.remove('selected_off')

		
	})

})


nav_menu_cate.forEach(function(q) {
	q.addEventListener('mouseleave', ()=> {
		q.classList.remove('select');
	})
	q.addEventListener('mouseenter', ()=> {
		q.classList.add('select')
	})
});

nav_menu_item.forEach(function(q,i) {
	q.addEventListener('mouseenter', () => {
		nav_menu_cate[i].classList.add('select_item');
	})
	q.addEventListener('mouseleave', () => {
		nav_menu_cate[i].classList.remove('select_item');
	})
});
