import DS from 'ember-data';

export default DS.Model.extend({
  entity: DS.belongsTo('entity'),
});
