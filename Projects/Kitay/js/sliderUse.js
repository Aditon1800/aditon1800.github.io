

$(".slider-foto-one").slick({
    prevArrow: $(".slider-foto-one + .prev-btn > .click-prev"),
    nextArrow: $(".slider-foto-one + .prev-btn > .click-next")
}), $(".slider-foto-two").slick({
    prevArrow: $(".slider-foto-two + .prev-btn > .click-prev"),
    nextArrow: $(".slider-foto-two + .prev-btn > .click-next")
}), $(".slider-foto-three").slick({
    prevArrow: $(".slider-foto-three + .prev-btn > .click-prev"),
    nextArrow: $(".slider-foto-three + .prev-btn > .click-next")

}), $(".slp1").slick({

    prevArrow: $(".slp1 + .prev-btn > .click-prev"),
    nextArrow: $(".slp1 + .prev-btn > .click-next")
}), $(".slp2").slick({
    prevArrow: $(".slp2 + .prev-btn > .click-prev"),
    nextArrow: $(".slp2 + .prev-btn > .click-next")
}), $(".slp3").slick({
    prevArrow: $(".slp3 + .prev-btn > .click-prev"),
    nextArrow: $(".slp3 + .prev-btn > .click-next")
}), $(".slp4").slick({
    prevArrow: $(".slp4 + .prev-btn > .click-prev"),
    nextArrow: $(".slp4 + .prev-btn > .click-next")
}), $(".slp5").slick({
    prevArrow: $(".slp5 + .prev-btn > .click-prev"),
    nextArrow: $(".slp5 + .prev-btn > .click-next")
}), $(".slp6").slick({
    prevArrow: $(".slp6 + .prev-btn > .click-prev"),
    nextArrow: $(".slp6 + .prev-btn > .click-next")
}), $(".slp7").slick({
    prevArrow: $(".slp7 + .prev-btn > .click-prev"),
    nextArrow: $(".slp7 + .prev-btn > .click-next")
}), $(".slp8").slick({
    prevArrow: $(".slp8 + .prev-btn > .click-prev"),
    nextArrow: $(".slp8 + .prev-btn > .click-next")
}), $(".slp9").slick({
    prevArrow: $(".slp9 + .prev-btn > .click-prev"),
    nextArrow: $(".slp9 + .prev-btn > .click-next")
}), $(".slp10").slick({
    prevArrow: $(".slp10 + .prev-btn > .click-prev"),
    nextArrow: $(".slp10 + .prev-btn > .click-next")
}), $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".slider-nav"
}), 
      $('.slider-nav').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              infinite: true,
              slidesToShow: 7,
              slidesToScroll: 1,
              autoplay: false,
              arrows: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: false,
              arrows: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 4,
              autoplay: false,
              arrows: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              arrows: true,

            }
          }
        ]
      });
$('.header-slides').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true
});
