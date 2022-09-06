$(document).ready(function(){

    $('.menu').click(function(){
      $('.navbar').toggle(); /* To determine that its the navbar and its contents that is been toggled on clicking */
      $('.menu .fa-bars').toggleClass('fa-times'); /*To determine from X to bars toggle */
      $('section').toggleClass('nav-toggle'); /* To let the navbar toggle with all tyhe contents inside */
    });
  
    $(window).on('load scroll',function(){
      $('.navbar').hide();
      $('.menu .fa-bars').removeClass('fa-times');
      $('section').removeClass('nav-toggle');
    });
  
  });