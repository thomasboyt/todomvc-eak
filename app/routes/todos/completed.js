var TodosCompletedRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    this.controlerFor("todos").set("filteredTodos", model.filter(function (todo) {
      if (todo.get('isCompleted')) {
        return true;
      }
    }));
  }
});

export default TodosCompletedRoute;
