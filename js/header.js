window.addEventListener('scroll', ()=>{
    let headerBg = document.querySelector('.header');
    let scrollPosition = window.scrollY;

    if(scrollPosition >= 10){
        headerBg.classList.add('addScroll');
    } else{
        headerBg.classList.remove('addScroll');
    }
});

$(document).ready(function(){
    let t = 0;	

	$('.appBarBtn').on({
		click:	function(){
			$('.m-nav').addClass('navShow');
            $('.m-nav ul').stop().animate({ bottom:'-10%', opacity:1 },600);
		}
	});
	
	$('.m-nav').on({	
		click:	function(){
            $('.m-nav').removeClass('navShow');
            $('.m-nav ul').stop().animate({ bottom:'-100%', opacity:0 },600);
		}
	});
	

});

