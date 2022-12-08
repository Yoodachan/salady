let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];


// 슬라이더

// let bnco = 1;
// let slide_list = document.getElementsByClassName('slide_list')[0];
// let banner = document.querySelectorAll('.banner');
// let banner_max = banner.length;

// right.addEventListener('click', function () {
//     if (bnco < banner_max) {
//         slide_list.style.transform = `translateX(-`+ bnco +`00vw)`; 
//         bnco += 1;
//         slide_list.style.transition = `all 0.6s`;
//     }
// })

  
// left.addEventListener('click', function () {
//     if ( bnco >= 2 ) {
//       let bnre = bnco -=1;
//       bnre -=1
//       slide_list.style.transform = `translateX(-`+ bnre +`00vw)`;
//     }
// })









// 스와이프



var swiper = new Swiper(".mySwiper", {
	loop : true,   // 슬라이드 반복 여부
	loopAdditionalSlides : 1,
	autoplay: {     //자동슬라이드 (false-비활성화)
		delay: 6000, // 시간 설정
		disableOnInteraction: true, // false-스와이프 후 자동 재생
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
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

// 모델 애니메이션



// nav 메뉴
// mouseleave

const header = document.getElementById('header');
const nav = document.getElementById('nav');
const logo_img = document.getElementsByClassName('logo_img')[0];
const mbtn_img = document.getElementsByClassName('mbtn_img')[0];
const gnb_wrap = document.getElementsByClassName('gnb_wrap')[0];

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
	// gnb on/off
	// gnb_wrap.classList.remove('gnb_off');
	// gnb_wrap.classList.add('gnb_on');
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
	// gnb on/off
	// gnb_wrap.classList.add('gnb_off');
	// gnb_wrap.classList.remove('gnb_on');
});


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





// // 서비스 워커 등록

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//       .register('./service_worker.js')
//       .then(function () {
//         console.log('서비스 워커가 등록됨!');
//       })
//   }


// function main_slide (){
//     let slide_wrap = document.getElementsByClassName('slide_wrap')[0];
// 	let banner = document.querySelectorAll('.banner');
//     let bn_co = banner.length;

//     let quick_list = document.getElementsByClassName('quick_list')[0];
//     let quick_btn = document.createElement("li");
//     quick_btn.classList.add('q_btn')
// 	for(let i = 0; i < bn_co ; i++){
//         console.log("11")
// 		quick_list.appendChild(quick_btn);
// 	}
	// q_btn.classList.add('on'); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
	// //마우스 휠 이벤트
	// $(window).bind("mousewheel", function(event){
	// 	var page = $(".quick ul li.on");
	// 	//alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
	// 	if($("body").find("#fullpage:animated").length >= 1) return false;
	// 	//마우스 휠을 위로
	// 	if(event.originalEvent.wheelDelta >= 0) {
	// 		var before=page.index();
	// 		if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");//퀵버튼옮기기
	// 		var pagelength=0;
	// 		for(var i=1; i<(before); i++)
	// 		{
	// 			pagelength += $(".full"+i).height();
	// 		}
	// 		if(page.index() > 0){ //첫번째 페이지가 아닐때 (index는 0부터 시작임)
	// 			page=page.index()-1;
	// 			$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
	// 		}else{
	// 			alert("첫번째페이지 입니다.");
	// 		}	
	// 	}else{ // 마우스 휠을 아래로	
	// 		var nextPage=parseInt(page.index()+1); //다음페이지번호
	// 		var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호
	// 		//현재페이지번호 <= (마지막 페이지 번호 - 1)
	// 		//이럴때 퀵버튼옮기기
	// 		if(page.index() <= $(".quick ul li").size()-1){ 
	// 			page.next().addClass("on").siblings(".on").removeClass("on");
	// 		}
			
	// 		if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
	// 			var pagelength=0;
	// 			for(var i = 1; i<(nextPage+1); i++){ 
	// 				//총 페이지 길이 구하기
	// 				//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
	// 				pagelength += $(".full"+i).height();
	// 			}
	// 			$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
	// 		}
	// 		else{ // 현재 마지막 페이지 일때는
	// 			alert("마지막 페이지 입니다!");
	// 		};		
			
	// 	}
	// }
    // );
// 	$(window).resize(function(){ 
// 		//페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
// 		var resizeindex = $(".quick ul li.on").index()+1;
		
// 		var pagelength=0;
// 		for(var i = 1; i<resizeindex; i++){ 
// 			//총 페이지 길이 구하기
// 			//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
// 			pagelength += $(".full"+i).height();
// 		}

// 		$("#fullpage").animate({"top": -pagelength + "px"},0);
// 	});
// }

// main_slide();

// // 사이드 퀵버튼 클릭 이동
// function quickClick(){
// 	$(".quick li").click(function(){
// 		var gnbindex = $(this).index()+1;
// 		var length=0;
// 		for(var i=1; i<(gnbindex); i++)
// 		{
// 			length+=$(".full"+i).height();
// 		}
// 		if($("body").find("#fullpage:animated").length >= 1) return false;
// 		$(this).addClass("on").siblings("li").removeClass("on");
		
// 		$("#fullpage").animate({"top": -length + "px"},800, "swing");
// 		return false;
// 	});
// }

// quickClick();



