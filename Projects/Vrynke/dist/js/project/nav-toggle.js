;(function() {

      var headerList = $('.js-header__list'),
            listButton = $('.js-list-button'),
            overlay = $('.overlay');
      // Toggle click
      $('.js-toggle').on('click', function() {
        overlay.fadeIn('slow');
        headerList.animate({
          left: 0
        })

        // Open/closed list
        $('.js-list-button').fadeIn(1200).on('click', function() {
          headerList.animate({
            left: -500
          });
          $(this).fadeOut();
          overlay.fadeOut();
        });

        // Show/hide closed-button
        $(window).resize(function() {
          if($(this).width() >= 992) {
          listButton.hide();
          }
        else {
          listButton.fadeIn();
          }
        });
      });
}());