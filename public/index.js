// var section;
// var sectionImage;



// function storePersonPhoto(what, where, when, who, callback) {

// // We'll post to the add-photo endpoint for the appropriate person.
// var postUrl = '/ReportBike/logBike';
//
// // Start a new request to post our newly added photo as JSON data.
// var postRequest = new XMLHttpRequest();
// postRequest.open('POST', postUrl);
// postRequest.setRequestHeader('Content-Type', 'application/json');
//
// /*
//  * Set up a simple handler for completed requests.  This will send an error
//  * into the callback if we don't get a 200 (success) status back.
//  */
// postRequest.addEventListener('load', function (event) {
//   var error;
//   if (event.target.status !== 200) {
//     error = event.target.response;
//   }
//   callback(error);
// });
//
// // Send our photo data off to the server.
// postRequest.send(JSON.stringify({
//   bikes: what,
//   what: what
// }));

// }

function clearTodoInputValues() {

  var todoInputElems = document.getElementsByClassName('todo-input-element');
  for (var i = 0; i < todoInputElems.length; i++) {
    var input = todoInputElems[i].querySelector('input, textarea');
    input.value = '';
  }
}

function logBikeInfo() {
  // Grab the values from all the input fields.
  var todoInputWhat = document.getElementById('todo-input-what').value || '';
  var todoInputWhere = document.getElementById('todo-input-where').value || '';
  var todoInputWhen = document.getElementById('todo-input-when').value || '';
  var todoInputWho = document.getElementById('todo-input-who').value || '';
  var todoInputDetails = document.getElementById('todo-input-details').value || '';
  var todoInputURL = document.getElementById('todo-input-url').value || '';

  // We only add the note if we have a value for "what".
  if (todoInputWhat.trim()) {

    // Create a new todo section and append it to the main element.
    var newTodoHTML = generateTodoHTML(
      todoInputWhat.trim(),
      todoInputWhere.trim(),
      todoInputWhen.trim(),
      todoInputWho.trim(),
      todoInputDetails.trim(),
      todoInputURL.trim()
    );



    // console.log(obj);
    // storePersonPhoto(todoInputWhat, todoInputWhere, todoInputWhen, todoInputWho);



    clearTodoInputValues();

  } else {

    // If there's no "what" value specified, throw an alert.
    alert('You must specify a value for the "what" field.');

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

  var logBikeButton = document.querySelector('.modal-accept-button');
  if(logBikeButton) {
    logBikeButton.addEventListener('click', logBikeInfo);
  }







  window.addEventListener('click', function (event) {

    if(event.target.classList.contains('todo')) {
      gotoBike(event);
    }
  });

});
