import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  //   return {players: this.store.findAll('player'),}
  //   this.store.query('entity', { filter: {
  //     components: [{ type: 'player' }, { type: 'name' }]
  //   }});
  
    return this.store.query('entity', { filter: {
        components: { type: 'player' },
      }});
  },
});
