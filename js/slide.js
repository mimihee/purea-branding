$(document).ready(function(){
	let cnt = z =  t = 0;
	let setId;

	let slideWinW = 1470;
	let rate = 0.408163265;
	let containerH = slideWinW*rate;
	let buttonTop = containerH/2; 


	function slideResizeFn(){
		if($(window).innerWidth() <=1470 ){
			slideWinW = $(window).innerWidth();
	   }
	   else{
			slideWinW = 1470;
	   }
	   	rate = 0.408163265;
		containerH = slideWinW*rate;
		buttonTop = containerH/2; 


		$('.slide-container').css({ height:containerH });	
		$('.nextBtn-wrap').css({ marginTop:buttonTop });	
		$('.prevBtn-wrap').css({ marginTop:buttonTop });	

	}
	setTimeout(slideResizeFn,100);
	

	$(window).resize(function(){
		slideResizeFn();
	});
	

	function autoPlayfn(){
		setId=setInterval(nextCountFn, 4000);
	}
	autoPlayfn();
	

	// 페이지 버튼 클릭 이벤트
	$('.page-btn').each(function(index){
		$(this).on({
			click: function(){
				clearInterval(setId);
				z=cnt;
				cnt=index;
				slideFn();
			}
		});
	});

	
	// 페이지 버튼 함수
	function pageBtnFn(){
		$('.page-btn').removeClass('addPageBtn');
		$('.page-btn').eq(cnt).addClass('addPageBtn');
	}
	
	
	// 다음 이전 클릭 이벤트
	$('.next-btn').on({
		click: function(){
			if( !$('.slide-wrap').is(':animated') ){
				clearInterval(setId);
				nextCountFn();
			}
		}
	});
	
	$('.prev-btn').on({
		click: function(){
			if( !$('.slide-wrap').is(':animated') ){
				clearInterval(setId);
				prevCountFn();
			}
		}
	});	
	
	
	
	function nextCountFn(){
		cnt++;
		if(cnt>2){cnt=0;}
		z=(cnt==0?2:cnt-1);
		slideFn();
	}
	
	function prevCountFn(){
		cnt--;
		if(cnt<0){cnt=2;}
		z=(cnt==2?0:cnt+1);
		slideFn();

	}
	
	
	function slideFn(){
		$('.slide').css({zIndex:1}).stop().animate({opacity:0},0); 	
		$('.slide').eq(z).css({zIndex:2}).stop().animate({opacity:1},0);	
		$('.slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:1},1000);	
		
		pageBtnFn();

	}
	


});