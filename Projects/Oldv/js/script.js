$(document).ready(function(){

// TAB NAV

(function(){
    var $tabBlock = $('.tab-block'),
            $step1 = $('.tab-nav__step1'),
            $step2 = $('.tab-nav__step2'),
            $step3 = $('.tab-nav__step3'),
            $tab1 = $('.tab1'),
            $tab2 = $('.tab2'),
            $tab3 = $('.tab3');

    $('[data-target="btn-next"]').on('click', function() {
      if($step1.hasClass('tab--active')) {
        $step1.removeClass('tab--active');
        $step2.addClass('tab--active');
        $tab1.hide();
        $tab2.show();
      }
      else if($step2.hasClass('tab--active')) {
        $step2.removeClass('tab--active');
        $step3.addClass('tab--active');
        $tab2.hide();
        $tab3.show();
        $(this).hide();
      }
    });
}());

// IMG PREV

(function() {

  var $imgWindow = $('.prod-block__img1');

  $('.prod-block__prev-img1').on('click', function() {
    $(this).parent().addClass('icon-overlay').siblings().removeClass('icon-overlay');
      $imgWindow.attr('src','img/tab-img2.1.jpg');
  });
  $('.prod-block__prev-img2').on('click', function() {
    $(this).parent().addClass('icon-overlay').siblings().removeClass('icon-overlay');
      $imgWindow.attr('src','img/tab-img2.jpg');
  });
}());

// BTN PLUS/MINUS

(function() {
      var $input = $('.counter-label')
              $box = $('.ordering-block__item'),
              $miniBox = $('.ordering-block__item-box'),
              $amount = parseInt($('[data-target="amount"]').text());
              $unit = $('.ordering-block__unit');

  $('.btn-down').click(function () {
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      $amount -= 2500;
      $amount = $amount < 2500 ? 2500 : $amount;
      $unit.text($input.val());
      $('.ordering-block__total-amount').text($amount);
      $('.ordering-block__item-box:nth-child(2)').remove();
      return false;
  });

  $('.btn-up').click(function () {
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      $miniBox.clone().appendTo($box);
      $amount += 2500;
      $unit.text($input.val());
      $('.ordering-block__total-amount').text($amount);
      return false;
  });
}());

// POPUP CLOSE

(function(){
  $('.popup-close').on('click', function() {
    $('.popup').hide();
    setTimeout(function() {window.location.reload();}, 100);
  });
}());

// FORM

$("#form").submit(function() {
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('.tab3').hide();
    $('.popup').show();
    $("#form").trigger("reset");
    return true;
  });
  return false;
});
});