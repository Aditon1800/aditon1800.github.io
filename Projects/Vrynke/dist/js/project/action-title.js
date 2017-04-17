// Clicik account title function

function clickTitle() {
  $('.js-action-title').each(function(index, elem) {
      $(elem).on('click',function() {
        $(this).toggleClass('account--show-elem');
      });
  });
}

  // Function call

  clickTitle();

// Windows width check
$(window).resize(function() {
  if($(this).width() > 480) {
    $('.js-action-title').each(function(index, elem) {
        $(this).next().removeAttr('style');
    });
  }
});

var linkRefresh = $('.account__link-refresh'),
      linkClass = linkRefresh[0].className;
      actionList = $('.account__action-list'),
      itemClassName = actionList.children()[0].className;

    // Get link in account 
    function replaceLink() {
      actionList.append('<li class="' + itemClassName + '"></li>');
      linkRefresh.removeClass(linkRefresh[0].className).appendTo(actionList[0].lastElementChild); // replace link
    }

    if($(this).width() < 768) {
      replaceLink();
    }

    $(window).resize(function() {
      if($(this).width() < 768) {
        replaceLink();   
      }
    });