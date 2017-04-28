// Training dropdonw

function dropStart(obj, elemAfter, objChild) {

  $(window).resize(function() {
    if($(this).width() <= 480) {
      $(obj).appendTo($('.dropdown-block'));
      $(obj).hide();
    }
    else if ($(this).width() > 480) {
      $(obj).insertAfter($(elemAfter)).show();
    }
  });

  if($(this).width() <= 480) {
    $(obj).prependTo($('.dropdown-block'));
    dropCheck();
  }

  dropCheck(obj);

  function dropCheck(obj) {
    $('.dropdown-block').on('click',function() {
      $(obj).toggle();
    });

    $(objChild).each(function(index, elem) {    
        $(elem).click(function() {
          $('.dropdown-value').html($(elem).text());
      });
    });
  }

}

dropStart ('.training__tab-list', '.container .main-content__title', '.training__tab-item');

// Category

dropStart ('.subcat__list', '.subcat__name', '.subcat__list-item a');