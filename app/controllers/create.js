import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Traveller',
  id: 'traveller',

  idConflicts: [],

  isNameToIdOn: false,
  isNameToIdToggled: false,

  nameFormatter: Ember.observer(
    'name',
    function () {
      let value = this.get('name');

      value = value.replace(/[^A-Za-z0-9.' -]/g, '')
      .replace(/^ /g, '').replace(/ +/g, ' ');

      this.set('name', value);

      if (this.get('isNameToIdOn')) {this.set('id', value);}
    }
  ),

  idFormatter: Ember.observer(
    'id',
    function () {
      let value;

      function format (value) {
        return value.toLowerCase()
        .replace(/[ -]+/g, '_')
        .replace(/[^a-z0-9_]/g, '')
        .replace(/^_/g, '')
        .replace(/_+/g, '_');
      }

      let simpleName = format(this.get('name'));
      let id = format(this.get('id'));

      value = simpleName;

      if (this.get('isNameToIdOn')) {
        value = value.replace(/_$/g, '');
      }
      else if (simpleName.length < id.length) {
        value = simpleName.concat(id.slice(simpleName.length - id.length));
      }

      this.set('id', value);
    }
  ),

  namePattern: /^[A-Za-z0-9.' -]+$/,
  idPattern: /^[a-z0-9_]+$/,

  isValid: Ember.computed(
    'name',
    'id',
    // 'namePattern', // Not necessary unless changed dynamically
    // 'idPattern', // Not necessary unless changed dynamically
    function () {
      return !!this.get('namePattern').test(this.get('name')) &&
             !!this.get('idPattern').test(this.get('id'));
    }
  ),

  actions: {
    nameFocusIn () {
      this.set('isNameToIdOn', true);
    },
    nameFocusOut () {
      this.set('isNameToIdOn', false);
    },
    nameInputChange () {
      console.log('inputChanged');
    }
  }

});
