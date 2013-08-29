var Adapter = DS.LSAdapter.extend({
  namespace: "todosmvc-eak"
});

var Store = DS.Store.extend({
  revision: 13,
  adapter: Adapter
});

export default Store;
