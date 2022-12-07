let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];




let bnco = 1;
let slide_list = document.getElementsByClassName('slide_list')[0];
let banner = document.querySelectorAll('.banner');
let banner_max = banner.length;

right.addEventListener('click', function () {
    if (bnco < banner_max) {
        slide_list.style.transform = `translateX(-`+ bnco +`00vw)`; 
        bnco += 1;
        slide_list.style.transition = `all 0.6s`;
    }
})

  
left.addEventListener('click', function () {
    if ( bnco >= 2 ) {
      let bnre = bnco -=1;
      bnre -=1
      slide_list.style.transform = `translateX(-`+ bnre +`00vw)`;
    }
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



