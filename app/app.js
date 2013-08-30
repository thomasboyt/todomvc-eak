import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'todos', // TODO: loaded via config
  Resolver: Resolver
});

import Store from 'todos/store';
App.Store = Store;

import routes from 'todos/routes';
App.Router.map(routes); // TODO: just resolve the router

export default App;
