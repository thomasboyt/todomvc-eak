import Todo from "todos/models/todo";

var TodosActiveRoute = Ember.Route.extend({
  model: function () {
    //return this.container.lookupFactory("model:todo");
    return Todo;
  },
  setupController: function (controller, model) {
    var todos = model.filter(function(todo) {
      return !(todo.get("isCompleted"));
    });
    this.controllerFor("todos").set("content", todos);
  }
});

export default TodosActiveRoute;

