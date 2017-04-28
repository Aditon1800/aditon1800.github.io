(function(){
  // FORM-CALLBACK

  $('.offer_form_button').click(function(){
    // Cache vars
    var name = $(this).prevAll('.offer_form_input.name').val();
    var phone = $(this).prevAll('.offer_form_input.phone').val();
    var nameAndPhone = 'name=' + name + '&phone=' + phone;
    var modal = $('.modal');
    var modal2 = $('.modal2');
    var notif_info = $('.modal .notif-info');
    var notif_info2 = $('.modal2 .notif-info');

    if(name!=='' && phone!=='') {
    // If fields NOT empty
      // Send AJAX request
      $.ajax({
        type: 'POST',
        url: 'mailing/form-callback.php',
        data: nameAndPhone,
        cache: false,
        success: function(res) {
          // Add styles to notification
          modal.addClass('opened');

          // Show notification message
          notif_info.html(res);

          // Clear input fields
          $('.offer_form_input.name').val('');
          $('.offer_form_input.phone').val('');
          $('.form').css({opacity: 0});
        }, function() {
          $('.modal-form').hide();
        }
      });
    } else {
    // If fields empty
      // Add styles to notification
      modal2.addClass('opened');

      // Show notification message
      notif_info2.html('Необходимо ввести Ваше имя и телефон!');
    }

    return false;
  });

  // Modal Close

  $('.modal').click(function(){
    $(this).removeClass('opened');
    $('.overlay').fadeOut('fast');
    $('.modal-form').fadeOut('fast');
    $('.form').css({opacity: 1});
  });
  $('.modal2').click(function(){
    $(this).removeClass('opened');
    $('.overlay').fadeOut('fast');
    $('.form').css({opacity: 1});
  });
})();