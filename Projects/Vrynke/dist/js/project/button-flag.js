$('.button--flag').each(function(index, elem) {
  $(elem).on('click', function() {
    $(this).toggleClass('button--flag--active');
    // console.log("AYAAAAA!!");
  });
});