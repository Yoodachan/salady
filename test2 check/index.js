

	// quickClick();



	// addEventListener("wheel", e => {
	// 	})

function full_page () {

	//fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기
	var pageindex = $("#fullpage > .fullsection").size();
	//fullpage 안에 섹션만큼 버튼 추가해주는 코드
	for(var i=1;i<=pageindex;i++){
		$("#fullpage > .quick > ul").append("<li></li>");
	}
	//일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
	$("#fullpage .quick ul :first-child").addClass("on");


	//마우스 휠 이벤트
	//chap 1 $(window).on("wheel", function(event){
	//chap 2 $("#fullpage").on("wheel", function(event){


	let full_page = document.getElementById('fullpage');

	function updown (event){

		const direction = event.deltaY > 0 ? "down" : "up";
		
		console.log(direction);

		console.log(event)

		console.log($("body").find("#fullpage:animated").length)

		//alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
		var page = $(".quick ul li.on");


		// 휠 이벤트 딜레이 제어
		if($("body").find("#fullpage:animated").length >= 1) return false;

		// 마우스 휠을 위로
		if (direction == "up" ) {

			var before=page.index();
			if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");//퀵버튼옮기기
			var pagelength=0;
			for(var i=1; i<(before); i++)
			{
				pagelength += $(".full"+i).height();
			}
			if(page.index() > 0){ //첫번째 페이지가 아닐때 (index는 0부터 시작임)
				page=page.index()-1;
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}

			
		} 
		else { // 마우스 휠을 아래로	

			var nextPage=parseInt(page.index()+1); //다음페이지번호
			var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호
			//현재페이지번호 <= (마지막 페이지 번호 - 1)
			//이럴때 퀵버튼옮기기
			if(page.index() <= $(".quick ul li").size()-1){ 
				page.next().addClass("on").siblings(".on").removeClass("on");
			}
			
			if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
				var pagelength=0;
				for(var i = 1; i<(nextPage+1); i++){ 
					//총 페이지 길이 구하기
					//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
					pagelength += $(".full"+i).height();
				}
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}
			
		}
}
	addEventListener("wheel", updown ) ;

	// $(window).resize(function(){ 
	// 	//페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
	// 	var resizeindex = $(".quick ul li.on").index()+1;
		
	// 	var pagelength=0;
	// 	for(var i = 1; i<resizeindex; i++){ 
	// 		//총 페이지 길이 구하기
	// 		//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
	// 		pagelength += $(".full"+i).height();
	// 	}

	// 	$("#fullpage").animate({"top": -pagelength + "px"},0);
	// });
}

	
full_page();

// 사이드 퀵버튼 클릭 이동
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