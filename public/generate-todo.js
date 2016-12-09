// Grab the todo template from Handlebars.
var bikeTemplate = Handlebars.templates.bike;

/*
 * This function should create an HTML string representing a new todo note
 * given the information that could be in the note.
 *
 * Note that where, when, who, and details can be an empty string.  If this
 * is the case, the corresponding portion of the todo note should not be
 * included in the HTML string.
 */

var content;
function generateBike(what, where, when, who, details, url) {

  content = '<section class="todo">';
  content += '<h2>'+what+'</h2>';
  content += '    <div class="todo-body">';

  if(where) {
    content += '<p class="indent-wrapped"><span class="where">where: </span>'+where+'</p>';
  }

  if(when) {
    content += '<p class="indent-wrapped"><span class="when">when: </span>'+when+'</p>';
  }

  if(who) {
    content += '<p class="indent-wrapped"><span class="who">who: </span>'+who+'</p>';
  }

  if(details) {
    content += '<p>'+details+'</p>';
  }

  if(url) {
    content += '<p class="indent-wrapped"><span class="url">url: </span>'+url+'</p>';
  }

  content += '</div>';
  content += '<div class="dismiss-button">&times;</div>';
  content += '</section>';


  return content;

}

