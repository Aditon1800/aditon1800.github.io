function clickTitle() {
  $('.js-account-title').each(function(index, elem) {
      $(elem).on('click',function() {
        $(this).next().toggle();
      });
  });
}

  clickTitle();


$(window).resize(function() {
  if($(this).width() > 480) {
    $('.js-account-title').each(function(index, elem) {
        $(this).next().removeAttr('style');
    });
  }
});