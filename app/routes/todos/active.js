var TodosActiveRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set("filteredTodos", model.filter(function (todo) {
      if (!todo.get('isCompleted')) {
        return true;
      }
    }));
  }
});

export default TodosActiveRoute;
