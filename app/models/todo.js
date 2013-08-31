var Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),

	todoDidChange: function () {
		Ember.run.once(this, 'save');
	}.observes('isCompleted', 'title')
});

Todo.toString = function() {
	return "Todo";
};

export default Todo;

