// Grab the todo template from Handlebars.
var todoTemplate = Handlebars.templates.todo;

function generateTodoHTML(what, where, when, who, details) {
  var newNote = {
    what: what,
    body: {
      where: where,
      when: when,
      who: who,
      details: details
    }
  }

return todoTemplate(newNote);
}
