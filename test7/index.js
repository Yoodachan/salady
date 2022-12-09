window.addEventListener("wheel", function(e){
	// e.preventDefault();
	const direction = e.deltaY > 0 ? "down" : "up";

	if($section.is(":animated")) return;
	
	if(direction == "down"){
		if(page== lastPage) return;
 
		page++;
	}else if(direction == "up"){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$section.animate({scrollTop : posTop});
}
// ,{passive : false}
);


var $section = $("section");
 
var page = 1;
 
var lastPage = $(".content").length;
 
$section.animate({scrollTop:0},10);



// $(window).on("wheel", function(e){
 
// 	if($html.is(":animated")) return;
 
// 	if(e.originalEvent.deltaY > 0){
// 		if(page== lastPage) return;
 
// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		if(page == 1) return;
 
// 		page--;
// 	}
// 	var posTop = (page-1) * $(window).height();
 
// 	$html.animate({scrollTop : posTop});
 
// });