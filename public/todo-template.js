(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todo'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "\n<section class=\"todo\">\n\n<h2>"
    + ((stack1 = ((helper = (helper = helpers.what || (depth0 != null ? depth0.what : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"what","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n  <div class=\"todo-body\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.where : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.when : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.who : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <p>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.details : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n  </div>\n\n  <div class=\"dismiss-button\">&times;</div>\n\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <p class=\"indent-wrapped\"><span class=\"where\">where: </span>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.where : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <p class=\"indent-wrapped\"><span class=\"when\">when: </span>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.when : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <p class=\"indent-wrapped\"><span class=\"who\">who: </span>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.who : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();