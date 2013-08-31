var TodoController = Ember.ObjectController.extend({
	isEditing: false,

	actions: {
		editTodo: function () {
			this.set('isEditing', true);
		},

		doneEditing: function () {
			this.set('isEditing', false);
		},

		removeTodo: function () {
			var todo = this.get('model');

			todo.deleteRecord();
			todo.save();
		}
	}
});

export default TodoController;
