import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    done (name, id, isValid) {
      if (isValid) {
        this.store.query('entity', {
          filter: { id: new RegExp('^'+id+'.*') }
        }).then((result) => {
          let entities = result.toArray();
          let idConflicts = [];
          let isIdConflict = false;
          
          for (let entity of entities) {
            let entityId = entity.get('id');
            isIdConflict = entityId !== id && !isIdConflict ? false : true;
            idConflicts.push(entityId);
          }
          
          if (!isIdConflict) {
            this.store.createRecord('entity', {
              id: id,
            }).save().then((entity) => {
              
              entity.get('components').then((components) => {
                components.pushObjects([
                  this.store.createRecord('name', {
                    name: name
                  }),
                  this.store.createRecord('player', {}),
                ]);
                components.save().then(() => {
                  this.transitionTo('index');
                });
              });
            });
          }
          else {
            let currentConflicts = this.controller.get('idConflicts');
            currentConflicts.pushObjects(idConflicts.filter((id) => {
              return (currentConflicts.contains(id)) ? false : true;
            }));
          }
        });
      }
    }
  },
  resetController: function (controller, isExiting) {
    if (isExiting) {
      controller.set('idConflicts', []);
      controller.set('isNameToIdOn', false);
      controller.set('isNameToIdToggled', false);
      controller.set('name', 'Traveller');
      controller.set('id', 'traveller');
    }
  }
});
