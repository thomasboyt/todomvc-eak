import Todo from "todos/models/todo";

var TodosIndexRoute = Ember.Route.extend({
  model: function() {
    //return this.container.lookupFactory("model:todo");
    return Todo;
  },
  setupController: function (container, model) {
    this.controllerFor('todos').set('content', model.find());
  }
});

export default TodosIndexRoute;
