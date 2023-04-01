$(document).ready(function() {
  
    $(window).scroll(function() {
      
      if ($(window).scrollTop() > 50) {
        $('h1').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      };
    });
  });

