import DS from 'ember-data';

export default DS.Model.extend({
  type: 'component',
  entity: DS.belongsTo('entity', { autoSave: true, }),
});
