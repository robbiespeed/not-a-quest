import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let model = [];
    
    this.store.findAll('player').then((players) => {
      players.forEach((player) => {
        this.store.findRecord('name', player.get('id')).then((name) => {
          model.pushObject(name);
        });
      });
    });
    
    return model;
  },
  actions: {
  },
});
