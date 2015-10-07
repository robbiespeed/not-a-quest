import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    done (name) {
      this.store.createRecord('player', {
        name: name,
      }).save();
      this.transitionTo('index');
    }
  },
  setupController (controller, model) {
    this._super(controller, model);

    controller.set('name', 'Traveller');
  }
});
