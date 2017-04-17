$(document).ready(function() {
   $('a[data-target^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top + 140;

       $('html, body').animate( { scrollTop: destination }, 500);

     return false;
   });
 });

// Trigger

(function() {
  var $triggerList = $('.header-navigation__list'),
        $headerTrigger = $('.header-trigger');


  $('.header-trigger').click(function() {
    $triggerList.toggleClass('toggle-class');
    $headerTrigger.toggleClass('trigger-bg');
  });
  $(window).resize(function() {
    if($(this).width < 767) {
      $('.header-navigation__list').css({
        display: 'block'
      });
    }
  });

$('[data-target^="#"]').click(function() {
  $triggerList.removeClass('toggle-class');
  $headerTrigger.removeClass('trigger-bg');
});
}());

(function(){
  var $headerHeight = $('.header').height(),
          $scrollBtn = $('.btn-up');

    $scrollBtn.click(function() {
        $('html, body').animate( { scrollTop: 0}, 500);
    });

  $(window).scroll(function() {
    if($(this).scrollTop() > $headerHeight + 30) {
        $scrollBtn.css({
          bottom: 25
        });
    }
    else {
        $scrollBtn.css({
          bottom: -100
        });
    }
  });
}());


