$(document).click( function(event){
  if( $(event.target).closest(".js-account-block").length ) 
  return;
  $(".js-account-block").fadeOut(50);
  event.stopPropagation();
});
$('.js-button-account').click( function() {
    $(this).siblings(".js-account-block").fadeToggle(50);
    return false;
  });
