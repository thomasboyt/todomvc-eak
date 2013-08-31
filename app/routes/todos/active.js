var TodosActiveRoute = Ember.Route.extend({
	setupController: function () {
		var todos = this.store.filter('todo', function (todo) {
			return !todo.get('isCompleted');
		});

		this.controllerFor('todos').set('filteredTodos', todos);
	}
});

export default TodosActiveRoute;

