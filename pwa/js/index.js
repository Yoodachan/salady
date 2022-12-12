
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



var swiper = new Swiper('.menu_list', {
	slidesPerView: 3,
	direction: getDirection(),
	navigation: {
	  nextEl: '.menu_btn_next',
	  prevEl: '.menu_btn_prev',
	},
	loop: true,
	spaceBetween : 20, // 슬라이드 사이 여백
	on: {
	  resize: function () {
		swiper.changeDirection(getDirection());
	  },
	},
  });

  function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = windowWidth <= 760 ? 'vertical' : 'horizontal';

	return direction;
  }