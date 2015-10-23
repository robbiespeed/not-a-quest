import DS from 'ember-data';
import Component from './component';

export default Component.extend({
  type: 'name',
  name: DS.attr('string'),
});
