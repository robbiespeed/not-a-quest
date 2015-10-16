import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let model = this.store.findRecord('name', params.entity_id);
    
    return model;
  }
});
