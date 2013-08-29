var TodosView = Ember.View.extend({
  didInsertElement: function () {
    this.$('#new-todo').focus();
  }
});

export default TodosView;
