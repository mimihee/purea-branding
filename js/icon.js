$(document).ready(function(){

    let tog = 0;

     $(window).scroll(function(){
		if( $(window).scrollTop()>=$('#main-content').offset().top+500 ){
			if( tog ==0 ){
				tog =1;
				animationFn();
			}
		}
		else{
			tog = 0;
			aniFormatFn();
			
		}
	});

	function animationFn(){
		$('.icons-wrap li').stop().animate({ marginBottom:0,opacity:1 },1000);
	}
	function aniFormatFn(){
		$('.icons-wrap li').stop().animate({ marginBottom:'50px',opacity:0 },1000);
	}


});