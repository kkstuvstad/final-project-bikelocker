var section;
var sectionImage;

function clearTodoInputValues() {

  var todoInputElems = document.getElementsByClassName('todo-input-element');
  for (var i = 0; i < todoInputElems.length; i++) {
    var input = todoInputElems[i].querySelector('input, textarea');
    input.value = '';
  }
}

//// navigate to individual bike's info
function gotoBike(event) {
  // console.log(event.target.getElementsByClassName('Serial#')[0].innerHTML);
  var bikeIndex = event.target.getElementsByClassName('Serial#')[0].innerHTML;
  if(bikeIndex) {
    window.location.href = 'bikes-' + bikeIndex;
  }
}

window.addEventListener('DOMContentLoaded', function (event) {

  var modalCancalButton = document.querySelector('.modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', clearTodoInputValues);
  }
});

window.addEventListener('click', function (event) {

  if(event.target.classList.contains('todo')) {
    gotoBike(event);
  }
});
