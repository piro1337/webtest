$(function(){
var top = 10
var pre_position = top;
scrollTo(0,top);
var bodyHeight = document.body.clientHeight;
var windowHeight = window.innerHeight;
var bottomPoint = bodyHeight-windowHeight;
console.log(bottomPoint);
	$(window).scroll(function(){
		console.log(window.scrollY);
		if(window.scrollY==0){
			scrollTo(0,top);
			pre_position = top;
		}else if(scrollY>bottomPoint){
			scrollTo(0,bottomPoint-10);
			pre_position = bottomPoint-10;
		}
		if(pre_position < window.scrollY) {
	        console.log("down");
	        scrollBy(0,(pre_position-window.scrollY)*2);
	        //$("html, body").animate({scrollTop: -50}, 10);
	    } else {
	        console.log("up");
	        scrollBy(0,(pre_position-window.scrollY)*2);
	        //$("html, body").animate({scrollTop: 50}, 10);
	    }
	    pre_position = window.scrollY;
	})
});
