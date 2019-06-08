$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var closeButton = $('#close');

  button.on('click', function(){
    modal.addClass('modal_active');
  });

  closeButton.on('click', function(){
    modal.removeClass('modal_active');
  });
});