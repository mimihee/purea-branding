$(document).ready(function(){

    let items =  $('.prd-box');

    $('.prd-menu-btn').each(function(index){
        $(this).on({
            click: function(){
                if( index == 0 ){
                    items.stop().show();
                }					
                else if( index == 1 ){
                    items.eq(0).show();
                    items.eq(1).hide();
                    items.eq(2).hide();
                    items.eq(3).hide();	
                }					
                else if( index == 2 ){
                    items.eq(0).hide();
                    items.eq(1).show();
                    items.eq(2).hide();
                    items.eq(3).hide();		
                }					
                else if( index == 3 ){
                    items.eq(0).hide();
                    items.eq(1).hide();
                    items.eq(2).show();
                    items.eq(3).hide();	
                } else {
                    items.eq(0).hide();
                    items.eq(1).hide();
                    items.eq(2).hide();
                    items.eq(3).show();	
                }			

                $('.prd-menu-btn').removeClass('addMenuBtn');
                $(this).addClass('addMenuBtn');
    
            }
        });
    });



});