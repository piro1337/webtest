$(function(){
	
	if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
		$("html, body").css("overflow","hidden");
		//$("html, body").animate({scrollTop: 5000},500);
		var pre_position = 0;
		//console.log(bottomPoint);
		
		$(window).on('touchstart', function(e){
			pre_position = e.changedTouches[0].pageY;
		});
		
		$(window).on('touchmove', function(e){
			//console.log(e.changedTouches[0].pageY);
			console.log(window.scrollY);
			if(pre_position > e.changedTouches[0].pageY) {
		        //scrollBy(0,(pre_position-window.scrollY)*2);
		        $("html, body").stop().animate({scrollTop: window.scrollY-100}, 10);
		    } else {
		        //scrollBy(0,(pre_position-window.scrollY)*2);
		        $("html, body").stop().animate({scrollTop: window.scrollY+100}, 10);
		    }
		    pre_position = e.changedTouches[0].pageY;
		});
	}else{
		var m = 50
		scrollTo(0,m);
		var bodyHeight = document.body.clientHeight;
		var windowHeight = window.innerHeight;
		var bottomPoint = bodyHeight-windowHeight;
		console.log(bottomPoint);
		document.addEventListener("wheel", function(event) {
			console.log(window.scrollY);
			if(window.scrollY==0){
				scrollTo(0,m);
				pre_position = m;
			}else if(scrollY>bottomPoint){
				scrollTo(0,bottomPoint-m);
			}
			if(event.deltaY>0) {
		        console.log("down");
		        scrollBy(0,-100);
		        //scrollBy(0,(pre_position-window.scrollY)*2);
		    } else {
		        console.log("up");
		        scrollBy(0,100);
		        //scrollBy(0,(pre_position-window.scrollY)*2);
		    }
		})

	}
});
