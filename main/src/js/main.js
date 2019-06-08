var button = document.querySelector('#button');
let closeButton = document.querySelector('#close');
var modal = document.querySelector('#modal');

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});
closeButton.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});