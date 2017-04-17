// Active class must be without dot

function blockToggle(elemClass, activeClass) {

  function clickTitle() {
    $(elemClass).each(function(index, elem) {
        $(elem).on('click',function() {
          $(this).toggleClass(activeClass);
        });
    });
  }

    clickTitle();

  $(window).resize(function() {
    if($(this).width() > 767) {
      $(elemClass).each(function(index, elem) {
          $(this).next().removeAttr('style');
      });
    }
  });
}

blockToggle('.js-footer-title', 'footer--show-elem');
blockToggle('.catalog__title', 'catalog--show-elem');