$('.message__client-block').each(function(index, elem){
  var contentBlock = $('.message__content-block'),
        leftBlock = $('.message__left-block')
  $(elem).on('click', function(){
    $(this).addClass('message__client-block--active')
              .siblings().removeClass('message__client-block--active');
      if($(window).width() < 767) {
        leftBlock.slideUp();
        contentBlock.slideDown();

        $('.message__content-close').on('click', function() {
            if(contentBlock.is(':visible')){
              contentBlock.slideUp();
              leftBlock.slideDown();
            }
        })
      }
  });
});

  $(window).resize(function() {
    if($(this).width() > 767 ) {
      $('.message__content-block').show();
      $('.message__left-block').show();
    }
    else {
      $('.message__content-block').hide();
    }
  });