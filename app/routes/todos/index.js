var TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.container.lookupFactory("model:todo").find();
  },
  setupController: function (controller, model) {
    this.controllerFor("todos").set("filteredTodos", model);
  }
});

export default TodosIndexRoute;
