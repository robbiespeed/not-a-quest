import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    done (name, id, isValid) {
      if (isValid) {
        this.store.query('player', {
          filter: { id: new RegExp('^'+id+'.*') }
        }).then((result) => {
          let players = result.toArray();
          let controller = this.controllerFor('create');
          let idConflicts = [];
  
          if (Ember.isEmpty(players)) {
            let entity = this.store.createRecord('entity', {
              id: id,
            });
            
            entity.get('components').then((components) => {
              components.pushObjects([
                this.store.createRecord('name', {
                  id: id,
                  name: name
                }),
                this.store.createRecord('player', {
                  id: id
                }),
              ]);
              
              entity.save().then(() => {
                components.save();
              });
            });
            
            this.transitionTo('index');
          }
          else {
            for (let player of players) {
              idConflicts.push(player.get('id'));
            }
          }
          controller.set('idConflicts', idConflicts);
        });
      }
    }
  },
  resetController: function (controller, isExiting) {
    if (isExiting) {
      controller.set('idConflicts', false);
      controller.set('isNameToIdOn', false);
      controller.set('isNameToIdToggled', false);
      controller.set('name', 'Traveller');
      controller.set('id', 'traveller');
    }
  }
});
