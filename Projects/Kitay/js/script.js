jQuery(document).ready(function() {

  // FAQ

  if ($('.faq-list__question')) {

    var $quest = $('.faq-list__question');
    var $easy = $('.faq-list__answer');

    $quest.each(function() {
      $(this).on('click', function() {

        var $answer = $(this).next($easy);
        var $child = $(this).children('span');
        var $span =$('.faq-list__question span');


        if($answer.is(':hidden')) {
            $answer.slideDown();
            $span.removeClass('click-qw-icon-minus').addClass('click-qw-icon');
            $child.removeClass('click-qw-icon').addClass('click-qw-icon-minus')
            $easy.not($answer).slideUp();
          } else { 
            $answer.slideUp();
            $child.removeClass('click-qw-icon-minus').addClass('click-qw-icon')
          }
         return false;
      });
    });
  };

  // Why-us-title block
  if ($('.why-us-title')) {

    var $whyTitle = $('.why-us-title');
    var $whyList = $('.why-us-list');

    $whyTitle.each(function() {
      $(this).on('click', function() {
        
        var $whyListNext = $(this).next($whyList);
        var $questIcon = $(this).children('.icon-title');

        if ($whyListNext.is(':hidden')) {
            $whyListNext.slideDown();
            $questIcon.removeClass('icon-title_plus').addClass('icon-title_minus');

        } else { 
          $whyListNext.slideUp();
          $questIcon.removeClass('icon-title_minus').addClass('icon-title_plus');
        }
      
         return false;
      });
    });
  }

  // Mobile menu
  if ($('.mobile-menu-btn')) {
    var $menuBtn = $('.mobile-menu-btn');
    var $mobileNav = $('.mobile-nav');
    var $menuBtnClose = $('.btn-close');

    $menuBtn.on('click', function() {
      $mobileNav.slideDown();
    })

    $menuBtnClose.on('click', function() {
      $mobileNav.slideUp();
    })
  };

  // Select
  if ($('.modal-form')) {
    var $select = $('.modal-form .select');
      $select.on('click', function() {
        var $selectDrop = $(this).next('.modal-form .select-drop');
        if($selectDrop.is(':hidden')) {
          $selectDrop.slideDown(300);
        } else {
          $selectDrop.slideUp(300);
        }
        return false;
      })
    }

  // Next button on modal form
  if ($('.btn-modal-form')) {

    var btnNext = $('.btn-modal-form');

    // Assign click event to all Next buttons
    $.each(btnNext, function (key, btn) {
      $(btn).on('click', nextBlock);
    });

    // Get next form block
    function nextBlock () {
      var elStep = $(this).parents('.modal-form');

      if ( elStep.data('is-last') === undefined ) {
        elStep.hide()
              .next()
              .show();
      };

      return false;
    }
  }

  // Popup menu
  if ($('#btn-uni-desc') && ($('#popup-btn'))) {
    var $modalForm = $('.modal-form');
    var $modalFormFirst= $('.modal-form-first');
    var $overlay = $('#overlay');

    $overlay.on('click', function() {
      $modalForm.fadeOut();
      $(this).fadeOut('fast');
    })
  }

    // iframe video
    (function() {

      var iframeVideo = $('#modal-iframe iframe');
      var videoSrc = iframeVideo.attr('src');
      var overIframe = $('.overlay-iframe');

      $('.play-btn').on('click', function() {
        // link to the video (added to html)
        var iframeLink = $(this).next('.frame-video_link').attr('href');

        $(overIframe).show();
        $('#modal-iframe').show();
        iframeVideo.attr('src', iframeLink);
      });

      $(overIframe).on('click', function() {

        $('#modal-iframe').hide();
        $(this).hide();
        iframeVideo.attr('src', '');
      });
    }());


    // zoom img slick
    (function() {

      $('.slider').each(function() {
        var zoom = $(this).next('.prev-btn').find('.click-zoom');
        var imgActive = $(this).find('.slick-slide');
        zoom.on('click', function() {

          imgActive.each(function() {
            if ($(this).hasClass('slick-active')) {
              var srcImg = $(this).attr('src');
              $('#modal-zoom').show();
              $('#modal-zoom').find('img').attr('src', srcImg);
            }
          });
        })

        $('#modal-zoom').on('click', function() {
          $(this).hide();
          $('#modal-zoom').find('img').attr('src', '');
        })
      })

    }());

    // call/close form
    (function() {

      var btnCall = $('button[data-button="call-popup"]');
      var $modalFormFirst = $('.modal-form-first');
      var $overlay = $('#overlay');
      var btnCloseModalForm = $('.modal-form__btn-close');

      btnCall.each(function() {

        $(this).on('click', function() {
          $modalFormFirst.show();
          $overlay.show();
        });

        $overlay.on('click', function() {
          $(this).hide(); 
          $modalFormFirst.hide();
        });

        btnCloseModalForm.each(function() {
          $(this).on('click', function() {
            $(this).parent('.modal-form').hide();
            $overlay.hide();
          });
        });
      });

    }());


    //call .popup-window
    (function() {

      var popupAll = $('.popup-window'),
          btnCallPreview = $('button[data-call="preview"]'),
          $overlay = $('#overlay'),
          btnClosePopupAll = $('.popup-window .btn-close');

      btnCallPreview.each(function() {

        $(this).on('click', function() {

          var indexBtn = $(this).data('index');

          popupAll.eq(indexBtn).css({
            opacity: 1,
            zIndex: 1100
          });
          $overlay.show();
        });

          $overlay.on('click', function() {
            popupAll.css({
              opacity: 0,
              zIndex: -1
            });
            $(this).hide();
        });

          btnClosePopupAll.on('click', function() {
            popupAll.css({
              opacity: 0,
              zIndex: -1
            });
            $overlay.hide();
        });
      });
    }());
});
