

// //마우스 휠시 위 아래 구분해서 콘솔에 표기해줌

// 변수 생성
let wheel_cooltime;

// console.log(screen)
// console.log(section_height);
// console.log(banner_rect);
// console.log(menu_rect);
// console.log(franchise_rect);
// console.log(store_rect);
// console.log(sns_rect);
// console.log(footer_rect);
// console.log(section_height * section_num)

// console.log("높이" + window.pageYOffset)

// console.log("테스트" + window.innerHeight);
const main = document.querySelector('#main')

main.addEventListener('wheel', function (e) {
	const banner = document.querySelector('#banner');
	const menu = document.querySelector('#menu');
	const franchise = document.querySelector('#franchise');
	const store = document.querySelector('#store')
	const sns = document.querySelector('#sns')
	const footer = document.querySelector('#footer')

	const main = document.querySelector('#main')

	const section = document.querySelectorAll('section')
	const section_num = (section.length) - 1;
	section_height = banner.getBoundingClientRect().height;
	banner_rect = banner.getBoundingClientRect();
	menu_rect = menu.getBoundingClientRect();
	franchise_rect = franchise.getBoundingClientRect();
	store_rect = store.getBoundingClientRect();
	sns_rect = sns.getBoundingClientRect();
	footer_rect = footer.getBoundingClientRect();
	const section_max = section_height * section_num;
	
	clearTimeout(wheel_cooltime); // 이전 휠 이벤트 제거
	wheel_cooltime = setTimeout ( function () {
		const window_y = window.pageYOffset;
		const screen = main.getBoundingClientRect().y;
		const mouse_direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
		let floor = Math.floor(( main.scrollTop / (main.scrollHeight - main.clientHeight)) * 100);

		if ( (mouse_direction == "Scroll Up") && (window_y <= section_max  )  ) {
			window.scrollBy( {top: -section_height, left: 0 ,behavior:'smooth'} );
			console.log(window_y);
			console.log(screen);
			console.log(window.scrollY);
			console.log(floor)
		}

		if ( (mouse_direction == "Scroll Up") && (window_y > section_max  )  ) {
			window.scrollBy( {top: -300, left: 0 ,behavior:'smooth'} );
			console.log(window_y);
			console.log(screen);
			console.log(window.scrollY);
			console.log(floor)
		}

		if ( (mouse_direction == "Scroll Down") && (window_y < section_max  ) ) {
			window.scrollBy( {top: section_height, left: 0 ,behavior:'smooth'} );
			console.log(window_y);
			console.log(screen);
			console.log(window.scrollY);
			console.log(floor)
		}
		if ( (mouse_direction == "Scroll Down") && (window_y == section_max  ) ) {
			window.scrollBy( {top: 300, left: 0 ,behavior:'smooth' } );
			console.log(window_y);
			console.log(screen);
			console.log(window.scrollY);
			console.log(floor)
		}
	}, 800 )
});








const scroll_btn = document.getElementsByClassName('scroll_up_btn')[0];
const order_btn = document.getElementById('order_btn');

window.addEventListener('scroll',
function() {
	let now_scroll = window.scrollY;

	if ( now_scroll >= 700 ) {

		//버튼 on/off
		mbtn_img.classList.remove('mbtn_img_off');
		mbtn_img.classList.add('mbtn_img_on');

		//로고 on/off
		logo_img.classList.remove('logo_hover_off');
		logo_img.classList.add('logo_hover_on');

		// 네브 on/off
		// if (header.classList.contains('header_on')) {
			nav.classList.remove('nav_off');
			nav.classList.add('nav_on');

		// }

	}

	if ( now_scroll < 700 ) {

		// 네브 on/off
		if (header.classList.contains('header_off')) {
			nav.classList.add('nav_off');
			nav.classList.remove('nav_on');
			// 버튼 on/off
			mbtn_img.classList.add('mbtn_img_off');
			mbtn_img.classList.remove('mbtn_img_on');

			// 로고 on/off
			logo_img.classList.add('logo_hover_off');
			logo_img.classList.remove('logo_hover_on');

		}
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









const menu_cate = document.getElementsByClassName('menu_cate')[0];

// 메인배너 스와이프
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



// 슬라이더

var slide_warm = new Swiper("#menu_warm", {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	freeMode: true,
	allowTouchMove : false,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 3,
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
	allowTouchMove : false,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 6,
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
	allowTouchMove : false,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 6,
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
	allowTouchMove : false,
	navigation: {
		nextEl: '.menu_btn_next',
		prevEl: '.menu_btn_prev',
	},
	loop: true,
	loopAdditionalSlides : 6,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	}
});

// 슬라이더 아코디언

// 선택자
const cate_item = document.querySelectorAll('.cate_item');

// 스와이프 컨텐츠
const menu_list = document.querySelectorAll('.menu_list');
// 타이틀 색변경
const cate_btn = document.querySelectorAll('.cate_btn');
// 설명 on/off
const cate_text = document.querySelectorAll('.cate_text');


// 2. 변수를 반복하고 파라미터에 담는다.
cate_item.forEach(function(q,i) {
// 3. 반복된 변수의 파라미터를 클릭하면 크기가 변동된다.
    q.addEventListener("click", 
	function () {
		cate_btn.forEach(function(q){
			q.classList.remove('cate_btn_on')
			// q.classList.add('cate_btn_off')
		})
		menu_list.forEach(function(q){
			q.classList.remove('menu_on')
			q.classList.add('menu_off')
		})
		cate_text.forEach(function(q){
			q.classList.remove('cate_text_on')
			// q.classList.add('cate_text_off')
		})

		cate_btn[i].classList.add('cate_btn_on');
		menu_list[i].classList.add('menu_on');
		menu_list[i].classList.remove('menu_off');
		cate_text[i].classList.add('cate_text_on');
         
    })
})




//   스크롤 아티클

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


// 카카오 지도


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

//강남역
// 37.4971636070215, 127.03023053922148
//선릉역
// 37.504282083362334, 127.04884054063321
//역삼역
// 37.50101756352483, 127.0383294193219
//삼성역
// 37.50856961099675, 127.05669547749909



var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.4971636070215, 127.03023053922148), //인포윈도우 표시 위치입니다
    iwRemoveable = false; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var infowindow = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition, 
    content : iwContent,
    removable : iwRemoveable
});


kakao.maps.event.addListener(marker1, 'click', function() {
	// 마커 위에 인포윈도우를 표시합니다
	infowindow.open(map, marker1);  
});


//지도의 중심좌표 설정
map.setCenter(new kakao.maps.LatLng(37.4971636070215, 127.03023053922148));

// // 지도를 클릭한 위치에 표출할 마커입니다
// var marker = new kakao.maps.Marker({ 
//     // 지도 중심좌표에 마커를 생성합니다 
//     // position: map.getCenter() 
// }); 


// // 지도에 마커를 표시합니다
// marker.setMap(map);

// // 지도에 클릭 이벤트를 등록합니다
// // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
// kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
//     // 클릭한 위도, 경도 정보를 가져옵니다 
//     var latlng = mouseEvent.latLng; 
    
//     // 마커 위치를 클릭한 위치로 옮깁니다
//     marker.setPosition(latlng);
    
//     var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
//     message += '경도는 ' + latlng.getLng() + ' 입니다';
    
//     // var resultDiv = document.getElementById('clickLatlng'); 
//     // resultDiv.innerHTML = message;
// 	console.log(message)
    
// });



// 메인배너 스와이프
var sns_slide_wrap = new Swiper(".sns_slide_wrap", {
	loop : true,   // 슬라이드 반복 여부
	loopAdditionalSlides : 1,
	autoplay: true,
	navigation: {
		nextEl: ".banner_btn_next",
		prevEl: ".banner_btn_prev",
	},
	pagination: {
		el: ".banner_pagination",
		type: "fraction",
	}
});


