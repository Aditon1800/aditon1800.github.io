// Video

var video;

window.onload = function() {
  video = document.getElementById("video");
};

function play() {
    video.play();
    $('.video-pres__block').css({background: 'black'});
    $('.video-pres__video').show();
    $('.video-pres__block-wrapper .sec-desc').hide();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
    $('.video-pres__block').css({background: 'url(\'img/video-bg.jpg\')'});
    $('.video-pres__video').hide();
    $('.video-pres__block-wrapper .sec-desc').show();
}

// Mob button

(function() {
  $('.mob-nav').click(function() {
    $('.header-nav__navbar-list').fadeToggle(100, function(){
      $(this).animate({
        right: 0,
      });
    });
  });
}());

// Search

(function() {
  $('.cart-group__search').click(function() {
    $('.cart-group__search-form').toggle({display: 'block'});
  });
}());

// Tab

var button = ['all', 'web'];

$('.project-tab__list-item').on('click' ,function(){
  var $title = $(this).attr('title');

  $(this).addClass('active').siblings().removeClass('active');

  $('.' + $title).each(function() {
    $(this).show().siblings().not($('.' + $title)).hide();
  });
});

$('.project-tab__list-item[title="filter-all"]').click(function(){
  $('.project-block').parent().show().siblings().show();
});


// Scroll

(function(){
$(function() {
  $('a[href*="#"]:not([href^="#my"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
}());
