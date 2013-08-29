function Routes() {
  this.resource('todos', { path: '/' }, function () {
    this.route('active');
    this.route('completed');
  });
}

export default Routes;
