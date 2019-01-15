/**
 * 
 */
$(document).ready(()=>{

	$('.login-button').on('click',()=>{
		$('.login-form').toggle();
	});
	
	$('.menu-button').on('click',()=>{
		$('.nav-menu').toggle();
	});
	
    
    $('.hide-button').click(function(){
    $('.product-photo').hide();
    });
    
    $('.show-button').click(function(){
    $('.product-photo').show();
    });
    
     $('.fadeout-button').click(function(){
    $('.product-photo').fadeOut();
    $('.product-photo').fadeOut('slow');
    $('.product-photo').fadeOut(3000);
    });
    

    
     $('.fadein-button').click(function(){
    $('.product-photo').fadeIn();
    $('.product-photo').fadeIn('slow');
    $('.product-photo').fadeIn(3000);
    });
     
     //show hide effect
     $('.show').on('click',()=>{
 		$('p').show();
 	});
 	
 	$('.hide').on('click',()=>{
 		$('p').hide();
 	});
     
     
     //Animate effect
     $("button").click(function(){
    	 var div=$("product-details");
     div.animate({left:'100px'},"slow");
     div.animate({fontsize:'3em'},"slow");
     });
     
     /*
     
     $(".hide-button").click(function(){
         $("img").hide();
        
     });
     $(".show-button").click(function(){
         $("img").show();
     });
     
     */

});

