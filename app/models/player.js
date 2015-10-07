// import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  // health: Ember.computed('strength', 'endurance', {
  //   get (key) {
  //     console.log('hello', key);
  //     return null;
  //   },
  //   set (key, value) {
  //     console.log('hello', key, value);
  //     return null;
  //   }
  // }),
  // strength: DS.attr('number'),
  // endurance: DS.attr('number'),
  // items: DS.hasMany('item'),
});
