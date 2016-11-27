function clearTodoInputValues() {

  var todoInputElems = document.getElementsByClassName('todo-input-element');
  for (var i = 0; i < todoInputElems.length; i++) {
    var input = todoInputElems[i].querySelector('input, textarea');
    input.value = '';
  }
}

window.addEventListener('DOMContentLoaded', function (event) {

  var modalCancalButton = document.querySelector('.modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', clearTodoInputValues);
  }
});
