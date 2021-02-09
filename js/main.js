$(document).ready(function(){

    let winH = $(window).innerHeight();
    $('#main-content').css({ height: winH });

    function responseFn(){
        winH = $(window).innerHeight();			
        $('#main-content').css({ height: winH });
    }
    responseFn();
    setTimeout(responseFn,100);
    
    $(window).resize(function(){
        responseFn();
        setTimeout(responseFn,100);
    });

	function aniFn(){
		$('.text h3').stop().delay(600).animate({opacity:1},700, function(){
			$('.text p').stop().animate({opacity:1},700 );
		});
	}
	aniFn(); 


});