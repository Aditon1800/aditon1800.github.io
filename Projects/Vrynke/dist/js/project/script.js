(function(){
    var itemMain = document.querySelector('.item__main-prew__img-block'),
          itemPrewMini = document.getElementsByClassName('item__prew-mini__block');
    for (var i =  0; i < itemPrewMini.length; i++) {
        itemPrewMini[i].onclick = function() {
           itemMain.innerHTML = this.innerHTML;
        }
      }
}());

// Tooltips
(function(){
 var $parent,
     windowWidth,
     windowHeight;
  
  //get actual window size
  function winSize() {
     windowWidth = $(window).width(),
     windowHeight = $(window).height();
  }
  winSize();
  $(window).resize(winSize);
 //tooltip fadeIn and fadeOut on hover  
 $('.question__tooltip').each(function() {
   
    $(this).parent().hover(function() {
      $(this).find('.question__tooltip').fadeIn(100);
    }, function() {
       $(this).find('.question__tooltip').fadeOut(100);
    });
 
 });
  
  
//tooltip position
  $(document).mousemove(function(e) {
    var mouseY = e.clientY,
        mouseX = e.clientX,
        tooltipHeight,
        tooltipWidth;
    
    $('.question__tooltip').each(function() {
      var $tooltip = $(this);
      tooltipHeight = $tooltip.outerHeight();
      tooltipWidth = $tooltip.width();
      $parent = $tooltip.parent();
     
      $tooltip.css({
        'left':mouseX,
        'top':mouseY+20
       });
      
      //reposition
      if (tooltipWidth + mouseX+ 20> windowWidth) {
       $tooltip.css({
        'left':mouseX-tooltipWidth-20
       });
      }
    
      if (tooltipHeight + mouseY +20 > windowHeight) {
        $tooltip.css({
        'top':mouseY-20-tooltipHeight
       }); 
      }
    });//end each
 });//tooltip positio
}());


(function() {
  $('.input__fileform input').each(function(index,elem) {
    // Element onchange
    $(elem).on('change', function() {
      var inputParam = $(this).val();

      if (inputParam.lastIndexOf('\\')){
          var i = inputParam.lastIndexOf('\\')+1;
      }
      else{
          var i = inputParam.lastIndexOf('/')+1;
      }

      (function(){
        // Slice inputfile date
        var filename = inputParam.slice(i),
              accountBlock = $('.account__dl-block'),

              // new area div
              div = document.createElement('div');
              div.className = "account__dl-in";
              div.innerHTML = '<a href="' + inputParam + '">' + filename + '</a><span class=\"dl-in--reset\">&#10006;</span>';
      var attr = $(elem).attr('name');

            if(attr == 'pdf') {
              var inputFileField = document.getElementsByClassName('input__filefield');
              inputFileField[0].innerText = filename;
            }
            else {
              // inseret div into the block
              accountBlock[index].style.display = 'block';
              accountBlock[index].appendChild(div);
            }
      }());

            // dl-in--reset patents delet
            (function(){
              $('.dl-in--reset').each(function(index, elem) {
                  $(elem).on('click', function() {
                      $(this).parent().remove();
                  });
              });  
          }());
    });
  });
}());

// Dl-in reset
(function(){
  $('.dl-in--reset').each(function(index, elem) {
      $(elem).on('click', function() {
          $(this).parent().remove();
      });
  });  
}());


// Check status

var statusBlock = $('.js-let-status').fadeOut(100);

// Check status
$('#js-check-status').on('change', function() {
  var inputChildren = $('.js-let-status input');
    if(statusBlock.is(':visible')) {
      statusBlock.fadeOut(100);
      inputChildren.prop({disabled: true, required: false});
    }
    else {
      statusBlock.fadeIn(100);
      inputChildren.prop({disabled: false, required: true});
    }
});


function getCheck (copy, pasteTo) {
  for(var i = 0; i<copy.length; i++) {
    pasteTo[i].value = copy[i].value;
  }
}

var checkAddress = document.getElementById('address'),
      copyAddress = document.getElementsByClassName('js-let-check'),
      pasteToAddress = document.getElementsByClassName('js-get-check');

checkAddress.onchange = function() {
  if (this.checked) {
    getCheck(copyAddress, pasteToAddress);
  }
}