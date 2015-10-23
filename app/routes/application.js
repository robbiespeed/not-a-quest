import Ember from 'ember';
// import DS from 'ember-data';

// const PlayerGroup = Ember.Object.extend({
//   players: [],
//   entities: Ember.computed(
//     'players',
//     function () {
//       let entities = [];
//       this.get('players').then((players) => {
//         players.forEach(function (player) {
//           player.get('entity').then((entity) => {
//             entities.push(entity);
//           });
//         })
//       });
//       return entities;
//     }
//   ),
//   names: []
// });


export default Ember.Route.extend({
  // model () {
  //   return {players: this.store.findAll('player'),}
  //   this.store.query('entity', { filter: {
  //     components: [{ type: 'player' }, { type: 'name' }]
  //   }});
  //
  //   return Ember.Object.create({
  //     players: this.store.findAll('player'),
  //     entities: DS.PromiseArray.create({
  //       promise: this.store.query('entity', { filter: {
  //         components: [{ type: 'player' }, { type: 'name' }]
  //       }})
  //     })
  //   });
  // },
  actions: {
  },
});
