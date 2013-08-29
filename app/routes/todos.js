var TodosRoute = Ember.Route.extend({
  model: function () {
    return this.container.lookupFactory("model:todo").find();
  }
});

export default TodosRoute;
