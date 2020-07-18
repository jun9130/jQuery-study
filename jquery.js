$(function () {
  $('.title').css("color", "red")
});

// let $div = $('div');
// $div.css('color', 'red').html('jQueryで書き換え');


$('div').hover(
  function(){
    $('#text').fadeIn();
  },
  function(){
    $('#text').fadeOut();
  }

);

$(function() {
  $('.list-item').click(function() {
    $(this).css('color', 'red');
  });
});
