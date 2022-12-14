

// 스와이프
var banner_slide = new Swiper(".banner_wrap", {
	loop : true,   // 슬라이드 반복 여부
	loopAdditionalSlides : 1,
	autoplay: false,
	navigation: {
		nextEl: ".banner_btn_next",
		prevEl: ".banner_btn_prev",
	},
	pagination: {
		el: ".banner_pagination",
		type: "fraction",
	}
});




// gnb 랜덤 캐릭터

const chara = ["chara_001","chara_002","chara_003","chara_004","chara_005"];
const gnb_left = document.getElementsByClassName('gnb_left')[0];
const gnb_model = document.createElement("img");
const rd_chara = chara[Math.floor(Math.random() * (chara.length))];
gnb_model.src = `./images/${rd_chara}.png`;
gnb_model.classList.add('gnb_model','model_off');
gnb_left.appendChild(gnb_model);
gnb_left.addEventListener('click', function () {
	const rd_chara = chara[Math.floor(Math.random() * (chara.length))];
	gnb_model.src = `./images/${rd_chara}.png`;
})

const model_move = document.getElementsByClassName('gnb_model')[0];

// // 모델 애니메이션



// // nav 메뉴
// // mouseleave

const header = document.getElementById('header');
const nav = document.getElementById('nav');
const logo_img = document.getElementsByClassName('logo_img')[0];
const mbtn_img = document.getElementsByClassName('mbtn_img')[0];
const gnb_wrap = document.getElementsByClassName('gnb_wrap')[0];
const gnb_depth = document.getElementsByClassName('gnb_depth')[0];


let news_menu = document.getElementsByClassName('news')[0];
let news_item = document.getElementsByClassName('news')[1];

let list_menu = document.getElementsByClassName('list')[0];
let list_item = document.getElementsByClassName('list')[1];

let brand_menu = document.getElementsByClassName('brand')[0];
let brand_item = document.getElementsByClassName('brand')[1];

let franchise_menu = document.getElementsByClassName('franchise')[0];
let franchise_item = document.getElementsByClassName('franchise')[1];

let order_menu = document.getElementsByClassName('order')[0];
let order_item = document.getElementsByClassName('order')[1];

nav.addEventListener('mouseenter', function () {

	// 헤더 on/off
	header.classList.remove('header_off');
	header.classList.add('header_on');

	//로고 on/off
	logo_img.classList.remove('logo_hover_off');
	logo_img.classList.add('logo_hover_on');

	//버튼 on/off
	mbtn_img.classList.remove('mbtn_img_off');
	mbtn_img.classList.add('mbtn_img_on');

	// 모델 애니메이션
	model_move.classList.remove('model_off');
	model_move.classList.add('model_on');

	// 네브 on/off
	nav.classList.remove('nav_off');
	nav.classList.add('nav_on');

});
header.addEventListener('mouseleave', function () {

	// 헤더 on/off
	header.classList.add('header_off');
	header.classList.remove('header_on');

	//로고 on/off
	logo_img.classList.add('logo_hover_off');
	logo_img.classList.remove('logo_hover_on');

	//버튼 on/off
	mbtn_img.classList.add('mbtn_img_off');
	mbtn_img.classList.remove('mbtn_img_on');

	// 모델 애니메이션
	model_move.classList.add('model_off');
	model_move.classList.remove('model_on');

	// 네브 on/off
	nav.classList.add('nav_off');
	nav.classList.remove('nav_on');

});


news_menu.addEventListener('mouseenter', function () {
	this.classList.add('select');
});
news_menu.addEventListener('mouseleave', function () {
	this.classList.remove('select');
});
news_item.addEventListener('mouseenter', function () {
	news_menu.classList.add('select');
});
news_item.addEventListener('mouseleave', function () {
	news_menu.classList.remove('select');
});


list_menu.addEventListener('mouseenter', function () {
	this.classList.add('select');
});
list_menu.addEventListener('mouseleave', function () {
	this.classList.remove('select');
});
list_item.addEventListener('mouseenter', function () {
	list_menu.classList.add('select');
});
list_item.addEventListener('mouseleave', function () {
	list_menu.classList.remove('select');
});


brand_menu.addEventListener('mouseenter', function () {
	this.classList.add('select');
})
brand_menu.addEventListener('mouseleave', function () {
	this.classList.remove('select');
})
brand_item.addEventListener('mouseenter', function () {
	brand_menu.classList.add('select');
})
brand_item.addEventListener('mouseleave', function () {
	brand_menu.classList.remove('select');
})


franchise_menu.addEventListener('mouseenter', function () {
	this.classList.add('select');
})
franchise_menu.addEventListener('mouseleave', function () {
	this.classList.remove('select');
})
franchise_item.addEventListener('mouseenter', function () {
	franchise_menu.classList.add('select');
})
franchise_item.addEventListener('mouseleave', function () {
	franchise_menu.classList.remove('select');
})


order_menu.addEventListener('mouseenter', function () {
	this.classList.add('select');
})
order_menu.addEventListener('mouseleave', function () {
	this.classList.remove('select');
})
order_item.addEventListener('mouseenter', function () {
	order_menu.classList.add('select');
})
order_item.addEventListener('mouseleave', function () {
	order_menu.classList.remove('select');
})


var slide_warm = new Swiper("#menu_warm", {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	freeMode: true,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 2,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	}
  });

var slide_salady = new Swiper("#menu_salady", {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	freeMode: true,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 2,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	}
});

var slide_wrap = new Swiper("#menu_wrap", {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	freeMode: true,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 2,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	}
});

var slide_sand = new Swiper("#menu_sand", {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	freeMode: true,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 2,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	}
});


// const menu_list = document.querySelectorAll('.menu_list');
const cate_item = document.getElementsByClassName('cate_item');
const menu_list = document.getElementsByClassName('menu_list');
const cate_text = document.getElementsByClassName('cate_text');
const cate_title = document.getElementsByClassName('cate_title');
const cate_num = cate_item.length;

for (let i = 0; i < cate_num; i++ ) {
	cate_item[i].addEventListener('click', 
	function () {
			cate_text[i].classList.remove('off_view');
			cate_text[i].classList.add('on_view');
	
			cate_title[i].classList.remove('off_style');
			cate_title[i].classList.add('on_style');
	
			menu_list[i].classList.remove('menu_off');
			menu_list[i].classList.add('menu_on');

		// else {
		// 	cate_text[i].classList.add('off_view');
		// 	cate_text[i].classList.remove('on_view');
	
		// 	cate_title[i].classList.add('off_style');
		// 	cate_title[i].classList.remove('on_style');
	
		// 	menu_list[i].classList.add('menu_off');
		// 	menu_list[i].classList.remove('menu_on');
		// }

		// var next_text = cate_text[i].nextElementSibling;
		// var next_title = cate_title[i].nextElementSibling;
		// var next_list = menu_list[i].nextElementSibling;

	});
}


// a b c d

// a를 눌렀을때
// b c d에 클래스 뭐가 있으면
// bcd제거

// b를 눌렀을때





//   스크롤 아티클

const scroll_btn = document.getElementsByClassName('scroll_up_btn')[0];
const order_btn = document.getElementById('order_btn');

window.addEventListener('scroll',
function(){
	const now_scroll = this.scrollY;

	// if( now_scroll > 800 ) {

	// // 헤더 on/off
	// header.classList.remove('header_off');
	// header.classList.add('header_on');

	// //로고 on/off
	// logo_img.classList.remove('logo_hover_off');
	// logo_img.classList.add('logo_hover_on');

	// //버튼 on/off
	// mbtn_img.classList.remove('mbtn_img_off');
	// mbtn_img.classList.add('mbtn_img_on');

	// // 모델 애니메이션
	// model_move.classList.remove('model_off');
	// model_move.classList.add('model_on');

	// // 네브 on/off
	// nav.classList.remove('nav_off');
	// nav.classList.add('nav_on');
	// }

	// if( now_scroll < 800 ) {

	// // 헤더 on/off
	// header.classList.add('header_off');
	// header.classList.remove('header_on');

	// //로고 on/off
	// logo_img.classList.add('logo_hover_off');
	// logo_img.classList.remove('logo_hover_on');

	// //버튼 on/off
	// mbtn_img.classList.add('mbtn_img_off');
	// mbtn_img.classList.remove('mbtn_img_on');

	// // 모델 애니메이션
	// model_move.classList.add('model_off');
	// model_move.classList.remove('model_on');

	// // 네브 on/off
	// nav.classList.add('nav_off');
	// nav.classList.remove('nav_on');

	// }

	let nav_menu = document.getElementsByClassName('nav_menu')[0];

	if ( now_scroll > 700 ) {
		nav_menu.style.color = '#333';
		nav.style.background = '#fff';
		nav_menu.style.border = '0px 0px 1px 0px solid #333';
	}
	if ( now_scroll >= 400 ) {
		scroll_btn.classList.remove('scroll_off');
		scroll_btn.classList.add('scroll_on');
		order_btn.classList.remove('order_off');
		order_btn.classList.add('order_on');
	}

	if ( now_scroll < 400 ) {
		scroll_btn.classList.remove('scroll_on');
		scroll_btn.classList.add('scroll_off');
		order_btn.classList.remove('order_on');
		order_btn.classList.add('order_off');
	}

	if ( (now_scroll > 800 && now_scroll < 1600) ) {
		order_btn.classList.remove('order_color_off');
		order_btn.classList.add('order_color_on');
	}

	if ( !(now_scroll > 800 && now_scroll < 1600) ) {
		order_btn.classList.remove('order_color_on');
		order_btn.classList.add('order_color_off');
	}

})


scroll_btn.addEventListener('click', function () {
	window.scrollTo( {top:0, left:0, behavior:'smooth'} )
})


const link_item = document.getElementsByClassName('link_item');
const item_fade = document.getElementsByClassName('item_fade');;
const fade_num = link_item.length;

for (let i = 0; i < fade_num; i++) {
	link_item[i].addEventListener('mouseenter', function () {
			item_fade[i].classList.remove('fade_off');
			item_fade[i].classList.add('fade_on');
	})

	link_item[i].addEventListener('mouseleave', function () {
		item_fade[i].classList.remove('fade_on');
		item_fade[i].classList.add('fade_off');
	})
}


var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.504057731674656, 127.0488437873566), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다 
// 선릉
var markerPosition1  = new kakao.maps.LatLng(37.504057731674656, 127.0488437873566);
// 강남
var markerPosition2  = new kakao.maps.LatLng(37.49706134409247, 127.03022540916527);
// 삼성
var markerPosition3  = new kakao.maps.LatLng(37.50845834102672, 127.05668691066668);
// 역삼
var markerPosition4  = new kakao.maps.LatLng(37.50091890504352, 127.03832427979548); 

// 마커를 생성합니다
var marker1 = new kakao.maps.Marker({
    position: markerPosition1
});
var marker2 = new kakao.maps.Marker({
    position: markerPosition2
});
var marker3 = new kakao.maps.Marker({
    position: markerPosition3
});
var marker4 = new kakao.maps.Marker({
    position: markerPosition4
});

// 마커가 지도 위에 표시되도록 설정합니다
marker1.setMap(map);
marker2.setMap(map);
marker3.setMap(map);
marker4.setMap(map);



