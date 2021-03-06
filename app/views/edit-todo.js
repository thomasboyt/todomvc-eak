var EditTodoView = Ember.TextField.extend({
  classNames: ['edit'],

  value: Ember.computed.alias('todo.title'),

  change: function () {
    var value = this.get('value');

    if (Ember.isEmpty(value)) {
      this.get('controller').removeTodo();
    }
  },

  focusOut: function () {
    this.set('controller.isEditing', false);
  },

  insertNewline: function () {
    this.set('controller.isEditing', false);
  },

  didInsertElement: function () {
    this.$().focus();
  }
});

export default EditTodoView;
