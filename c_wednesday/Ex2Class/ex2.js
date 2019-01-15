/**
 * 
 */

$(document).ready(()=>{                            //.click(function(){
    $('.hide-button').on('click',()=>{
        $('.product-photo').hide();
        });
    });
 
$(document).ready(()=>{
    $('.show-button').on('click',()=>{
        $('.product-photo').show();
        });
    });
 
$(document).ready(function(){
    $('.hide-buttonp1').on('click',()=>{
        $("#p1").hide();
    });
});
 
$(document).ready(function(){
    $('.hide-buttonp2').on('click',()=>{
        $("#p2").toggle();
    });
});