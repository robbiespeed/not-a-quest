import DS from 'ember-data';

export default DS.Model.extend({
  components: DS.hasMany('component', {
    polymorphic: true,
    dependent: 'destroy',
  }),
});
