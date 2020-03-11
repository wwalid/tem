$(window).on('load', function () {
    $(".over .sk-folding-cube").fadeOut(4000,function(){
  $(this).parent().fadeOut(4000);
  });
  });


  $(function(){
    "ues strict";
    
       $(".navbar .nav-item .nav-link").click(function (e){
        e.preventDefault();
        $('html , body').animate({
         scrollTop: $('#' + $(this).data('scroll')).offset().top +1
        },2000);
       });
       $('.navbar li a').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
       });
      
    });
    $(window).scroll(function(){
      $(".block").each(function(){
       if($(window).scrollTop() > $(this).offset().top){
        var blockID = $(this).attr("id");
        $(".navbar a").removeClass('active');
        $('.navbar li a[data-scroll="'+ blockID +'"]').addClass('active');
       }
     });
  });





  $(document).ready(function() {
    $('#contain').mixItUp(); 
    $('.shuffle .filter').click(function (){
      $(this).addClass('fil').siblings().removeClass('fil');
    });
  });
  
$(function (){
  $(".num").counterUp({delay:10,time:5000});
});
 

$(function() {
  "ues strict";
  $(window).on("scroll", function(){
 var sc = $(window).scrollTop();
 if(sc > 1000){
   $('.top').fadeIn(200);
 }else{
  $('.top').fadeOut(200);
 }
  });
});
$('.top').click(function () {
$('html, body').animate({
  scrollTop: 0
},1500);
});