window.onload = function () {
	let banner_item = document.querySelectorAll('.banner_item');
	banner_item.forEach( (q,i) => {
		banner_item[i].classList.remove(`item_0${i}_off`);
		banner_item[i].classList.add(`item_0${i}_on`);
});
}


const scroll_btn = document.getElementsByClassName('scroll_up_btn')[0];
const order_btn = document.getElementById('order_btn');

// //마우스 휠시 위 아래 구분해서 콘솔에 표기해줌

// 변수 생성
let wheel_cooltime;

const main = document.querySelector('#main')

const section = document.querySelectorAll('section')
const section_num = (section.length) - 1;
const section_height = banner.getBoundingClientRect().height;


header.addEventListener('mouseleave', function () {
	let now_scroll = window.scrollY;

	if (now_scroll >= section_height ) {
	// 헤더 on/off
	header.classList.remove('header_on');
	header.classList.add('header_off');

	// 네브 on/off
	nav.classList.remove('nav_off');
	nav.classList.add('nav_on');

	//로고 on/off
	logo_img.classList.remove('logo_hover_off');
	logo_img.classList.add('logo_hover_on');

	}
	else {

	// 헤더 on/off
	header.classList.remove('header_on');
	header.classList.add('header_off');

	//로고 on/off
	logo_img.classList.add('logo_hover_off');
	logo_img.classList.remove('logo_hover_on');


	// 네브 on/off
	nav.classList.add('nav_off');
	nav.classList.remove('nav_on');

	//GNB 색변경
	gnb_wrap.classList.add('gnb_off');
	gnb_wrap.classList.remove('gnb_on');
	

	}

});


// 네브 사이드 메뉴 버튼

const nav_mbtn = document.getElementsByClassName('nav_mbtn')[0];
const close_btn = document.getElementsByClassName('close_btn')[0];
const all_menu = document.getElementsByClassName('all_menu')[0];

nav_mbtn.addEventListener('mouseenter', () => {
	if (header.classList.contains('header_on')) {
		header.classList.remove('header_on');
		header.classList.add('header_off');
		if (nav.classList.contains('nav_on') && (window.scrollY < section_height) ) {
			nav.classList.remove('nav_on');
			nav.classList.add('nav_off');

			logo_img.classList.remove('logo_hover_on');
			logo_img.classList.add('logo_hover_off');


		}

		
	}
});


// 히든메뉴 온오프

nav_mbtn.addEventListener('click', () => {
		all_menu.classList.remove('all_menu_off');
		all_menu.classList.add('all_menu_on');
});

close_btn.addEventListener('click', () => {
		all_menu.classList.remove('all_menu_on');
		all_menu.classList.add('all_menu_off');
});



const store_map_hover = document.getElementById('map');
const location_hover = document.getElementsByClassName('location_wrap')[0];

let store_bleen = false;
let location_bleen = false;


store_map_hover.addEventListener('mouseenter', function () {
	store_bleen = true;
})
location_hover.addEventListener('mouseenter', function () {
	location_bleen = true;
})

store_map_hover.addEventListener('mouseleave', function () {
	store_bleen = false;
})
location_hover.addEventListener('mouseleave', function () {
	location_bleen = false;
})


main.addEventListener('wheel', (e) => {
	if (( store_bleen == false ) && ( location_bleen  == false )) {

		const section_max = section_height * section_num;
		clearTimeout(wheel_cooltime); // 이전 휠 이벤트 제거
		wheel_cooltime = setTimeout (() => {
			// 해상도가 800 이상일시에만 풀페이지 스크롤이 작동
			if ( (window.innerWidth > 800 ) ) {
				const mouse_direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
				const window_y = window.pageYOffset;
	
				if ( (mouse_direction == "Scroll Up") && (window_y <= section_max  )  ) {
					window.scrollBy( {top: -section_height, left: 0 ,behavior:'smooth'} );
				}
		
				if ( (mouse_direction == "Scroll Up") && (window_y > section_max  )  ) {
					window.scrollBy( {top: -300, left: 0 ,behavior:'smooth'} );
				}
		
				if ( (mouse_direction == "Scroll Down") && (window_y < section_max  ) ) {
					window.scrollBy( {top: section_height, left: 0 ,behavior:'smooth'} );
				}
				if ( (mouse_direction == "Scroll Down") && (window_y == section_max  ) ) {
					window.scrollBy( {top: 300, left: 0 ,behavior:'smooth' } );
				}
			}
		}, 800 )

	}
});	



// 높이에 따른 헤더바 스타일 변경
header.addEventListener('mouseleave', function () {
	let now_scroll = window.scrollY;

if (now_scroll >= section_height ) {
	
// 헤더 on/off
header.classList.remove('header_on');
header.classList.add('header_off');

// 네브 on/off
nav.classList.remove('nav_off');
nav.classList.add('nav_on');

//로고 on/off
logo_img.classList.remove('logo_hover_off');
logo_img.classList.add('logo_hover_on');

}

});




// 스크롤 애니메이션 적용
window.addEventListener('scroll', () => {
	
	const menu_title_text = document.getElementsByClassName('menu_title_text')[0];
	const menu_cate = document.getElementsByClassName('menu_cate')[0];
	const menu_slide = document.getElementsByClassName('menu_slide_wrap')[0];
	
	const franchise_title_text = document.getElementsByClassName('franchise_title_text')[0];
	const franchise_desc_text = document.getElementsByClassName('franchise_desc_text')[0];
	const franchise_comment_text = document.getElementsByClassName('franchise_comment_text')[0];
	const frc_btn_box_01 = document.getElementsByClassName('frc_btn_box')[0];
	const frc_btn_box_02 = document.getElementsByClassName('frc_btn_box')[1];
	
	const store_title_text = document.getElementsByClassName('store_title_text')[0];
	const store_map = document.getElementById('map');
	const location = document.getElementsByClassName('location_wrap')[0];
	const store_mobile = document.getElementsByClassName('mobile_store_wrap')[0];
	const store_btn = document.getElementsByClassName('store_btn_wrap')[0];

	const sns_title_text = document.getElementsByClassName('sns_title_text')[0];
	const sns_link_wrap = document.getElementsByClassName('sns_link_wrap')[0];
	const sns_slide = document.getElementsByClassName('sns_slide_wrap')[0];

	let banner_item = document.querySelectorAll('.banner_item');
	
	
	// 현재 스크롤 높이
	//섹션 한개당 넓이 section_height
	let now_scroll = window.scrollY;
	// 배너 애니메이션
	if ( now_scroll == 0 ) {
		banner_item.forEach( (q,i) => {
			banner_item[i].classList.remove(`item_0${i}_off`);
			banner_item[i].classList.add(`item_0${i}_on`);
		})
	}
	if  (now_scroll > 0 ) {
		banner_item.forEach( (q,i) => {
			banner_item[i].classList.remove(`item_0${i}_on`);
			banner_item[i].classList.add(`item_0${i}_off`);
		})
	}
	// 메뉴 애니메이션
	if ( (now_scroll >= (section_height*1)) && (now_scroll < (section_height*2)) ) {
		menu_title_text.classList.remove('menu_text_off');
		menu_title_text.classList.add('menu_text_on');

		menu_cate.classList.remove('menu_cate_anime_off');
		menu_cate.classList.add('menu_cate_anime_on');

		menu_slide.classList.remove('menu_slide_anime_off');
		menu_slide.classList.add('menu_slide_anime_on');
	}
	if ( (now_scroll < (section_height*1)) || (now_scroll >= (section_height*2)) ) {
		menu_title_text.classList.remove('menu_text_on');
		menu_title_text.classList.add('menu_text_off');

		menu_cate.classList.remove('menu_cate_anime_on');
		menu_cate.classList.add('menu_cate_anime_off');

		menu_slide.classList.remove('menu_slide_anime_on');
		menu_slide.classList.add('menu_slide_anime_off');
	}

	// 프랜차이즈 애니메이션
	if ( (now_scroll >= (section_height*2)) && (now_scroll < (section_height*3)) ) {
		franchise_title_text.classList.remove('franchise_title_off');
		franchise_title_text.classList.add('franchise_title_on');

		franchise_desc_text.classList.remove('franchise_desc_off');
		franchise_desc_text.classList.add('franchise_desc_on');

		franchise_comment_text.classList.remove('franchise_comment_off');
		franchise_comment_text.classList.add('franchise_comment_on');

		frc_btn_box_01.classList.remove('frc_btn_off');
		frc_btn_box_01.classList.add('frc_btn_on');
		frc_btn_box_02.classList.remove('frc_btn_off');
		frc_btn_box_02.classList.add('frc_btn_on');
	}
	if ( (now_scroll < (section_height*2)) || (now_scroll >= (section_height*3)) ) {
		franchise_title_text.classList.remove('franchise_title_on');
		franchise_title_text.classList.add('franchise_title_off');

		franchise_desc_text.classList.remove('franchise_desc_on');
		franchise_desc_text.classList.add('franchise_desc_off');

		franchise_comment_text.classList.remove('franchise_comment_on');
		franchise_comment_text.classList.add('franchise_comment_off');

		frc_btn_box_01.classList.remove('frc_btn_on');
		frc_btn_box_01.classList.add('frc_btn_off');
		frc_btn_box_02.classList.remove('frc_btn_on');
		frc_btn_box_02.classList.add('frc_btn_off');
	}

	// 스토어 애니메이션
	if ( (now_scroll >= (section_height*3)) && (now_scroll < (section_height*4)) ) {
		store_title_text.classList.remove('store_title_off');
		store_title_text.classList.add('store_title_on');

		store_map.classList.remove('map_off');
		store_map.classList.add('map_on');

		location.classList.remove('location_off');
		location.classList.add('location_on');

		if (innerWidth <= 800) {
			store_mobile.classList.remove('store_wrap_off');
			store_mobile.classList.add('store_wrap_on');

			store_btn.classList.remove('store_btn_off');
			store_btn.classList.add('store_btn_on');
		}

	}

	if ( (now_scroll < (section_height*3)) || (now_scroll >= (section_height*4)) ) {
		store_title_text.classList.remove('store_title_on');
		store_title_text.classList.add('store_title_off');

		store_map.classList.remove('map_on');
		store_map.classList.add('map_off');

		location.classList.remove('location_on');
		location.classList.add('location_off');
		if (store_mobile.classList.contains('store_wrap_on')) {

			store_mobile.classList.remove('store_wrap_on');
			store_mobile.classList.add('store_wrap_off');

			store_btn.classList.remove('store_btn_on');
			store_btn.classList.add('store_btn_off');
		}
	}

	// SNS 애니메이션
	if ( (now_scroll >= (section_height*4)) && (now_scroll < (section_height*5)) ) {
		sns_title_text.classList.remove('sns_title_off');
		sns_title_text.classList.add('sns_title_on');

		sns_link_wrap.classList.remove('sns_link_wrap_off');
		sns_link_wrap.classList.add('sns_link_wrap_on');

		if (innerWidth <= 800) {
			sns_slide.classList.remove('sns_slide_off');
			sns_slide.classList.add('sns_slide_on')
		 }

	}
	if ( (now_scroll < (section_height*4)) || (now_scroll >= (section_height*5)) ) {
		sns_title_text.classList.remove('sns_title_on');
		sns_title_text.classList.add('sns_title_off');

		sns_link_wrap.classList.remove('sns_link_wrap_on');
		sns_link_wrap.classList.add('sns_link_wrap_off');

		if (sns_slide.classList.contains('sns_slide_on')) {
			sns_slide.classList.remove('sns_slide_on');
			sns_slide.classList.add('sns_slide_off')
		 }
	}


	//현재 스크롤 >= 섹션 1개 높이
	// 현재 화면 스크롤이 섹션 1개 높이랑 같거나 클때
	// 네브바 디자인을 변경함
	if ( now_scroll >= section_height ) {

	//버튼 on/off
	mbtn_img.classList.remove('mbtn_img_off');
	mbtn_img.classList.add('mbtn_img_on');

	//로고 on/off
	logo_img.classList.remove('logo_hover_off');
	logo_img.classList.add('logo_hover_on');

	// 네브 on/off
	nav.classList.remove('nav_off');
	nav.classList.add('nav_on');

	}
	// 현재 화면 스크롤이 섹션 1개 높이랑 같거나 클때
	// 네브바 디자인을 원상복구
	if ( now_scroll < section_height ) {
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

	// 현재 화면 스크롤이 섹션 1개 높이랑 같거나 클때
	// 스크롤탑 버튼을 생성함
	if ( now_scroll >= section_height ) {
		scroll_btn.classList.remove('scroll_off');
		scroll_btn.classList.add('scroll_on');
		order_btn.classList.remove('order_off');
		order_btn.classList.add('order_on');
	}


	// 현재 화면 스크롤이 섹션 1개 크기보다 작을때
	// 스크롤탑 버튼을 집어넣음
	if ( now_scroll < section_height ) {
		scroll_btn.classList.remove('scroll_on');
		scroll_btn.classList.add('scroll_off');
		order_btn.classList.remove('order_on');
		order_btn.classList.add('order_off');
	}

	// 현재 화면 스크롤이 섹션 1개 높이보다 크면서 동시에 섹션 3개 곱한거보단 작을때
	// 주문버튼 색상을 변경함
	
	if ( (now_scroll >= (section_height*2)) && (now_scroll < (section_height*3)) ) {
		order_btn.classList.remove('order_color_off');
		order_btn.classList.add('order_color_on');
	} 
	if ( (now_scroll < (section_height*2)) || (now_scroll >= (section_height*3)) ) {
	// 현재 화면 스크롤이 섹션 1개 높이보다 크면서 동시에 섹션 3개 곱한거보단 작을때
	// 주문버튼 색상을 원복
		order_btn.classList.remove('order_color_on');
		order_btn.classList.add('order_color_off');

	}
})









const menu_cate = document.getElementsByClassName('menu_cate')[0];

// 메인배너 스와이프


// 슬라이더

const slide_warm = new Swiper("#menu_warm", {
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

const slide_salady = new Swiper("#menu_salady", {
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

const slide_wrap = new Swiper("#menu_wrap", {
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

const slide_sand = new Swiper("#menu_sand", {
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


const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const options = { //지도를 생성할 때 필요한 기본 옵션
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
const sns_slide_wrap = new Swiper(".sns_slide_wrap", {
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


