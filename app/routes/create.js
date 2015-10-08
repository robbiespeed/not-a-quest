import Ember from 'ember';

// function validateText (text, options) {
//   options = {
//     letters: options.letters || true,
//     numbers: options.letters || true,
//   };
//   let pattern = new RegExp();
// }

export default Ember.Route.extend({
  actions: {
    done (name, id, isValid) {
      if (isValid) {
        this.store.query('player', {
          id: new RegExp('^'+id+'.*')
        }).then((result) => {
          // on promise fulfillment
          // result contains players with potention id conflicts
          let idConflicts = [];
          let controller = this.controllerFor('create');

          for (let player of result.get('content')) {
            idConflicts.push(player.record.get('id'));
          }

          controller.set('idConflicts', idConflicts);
        }, (reason) => {
          // on rejection
          if (!reason) {
            // assume no matches found so it's safe to create
            this.store.createRecord('player', {
              id: id,
              name: name,
            }).save();
            this.transitionTo('index');
          }
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
