(function() {

  if(window.$) {

    $(document).ready( function() {

      let $slider = $( '.js-slider' ).length ? $( '.js-slider' ) : null,
          $prevArrow = $( '.js-navPrev' ),
          $nextArrow = $( '.js-navNext' ),
          $dotsBox = $( '.js-dotsBox' );

      if( $slider ) {

        $slider.slick({
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          arrows: true,
          infinite: true,
          speed: 300,
          prevArrow: $prevArrow,
          nextArrow: $nextArrow,
          appendDots: $dotsBox,
          dotsClass: 'slick-dots custom-dots',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
                infinite: false
              }
            },
            {
              breakpoint: 1200,
              settings: {
                rows: 2,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
              }
            },
          ]
        });
      }

    });
  }


})();
