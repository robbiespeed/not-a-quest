import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('entity', params.entity_id);
  },
  setupController (controller, model) {
    this._super(controller, model);
    
    model.get('components').then(() => {
      this.set('areComponentsLoaded', true);
    });
  },
  areComponentsLoaded: Ember.computed({
    get (key, value) {
      return value;
    },
    set (key, value) {
      if (value === true) {
        this.controller.set('canDelete', true);
      }
      else {
        this.controller.set('canDelete', false);
      }
      return value;
    }
  }),
  actions: {
    deleteEntity () {
      this.controller.model.destroyRecord().then(() => {
        this.transitionTo('index');
      });
    },
  },
});
