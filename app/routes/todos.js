import Todo from "todos/models/todo";

var TodosRoute = Ember.Route.extend({
  model: function () {
    //return this.container.lookupFactory("model:todo").find();
    return Todo.find();
  }
});

export default TodosRoute;
