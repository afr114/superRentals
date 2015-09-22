import Ember from 'ember';

export default Ember.Component.extend({
  isUpdateFormShowing: false,
  actions: {
    showUpdateForm: function(){
      this.set('isUpdateFormShowing', true);
    },

    saveChanges(rental) {
      var params = {
        owner: this.get('owner'),
        type: this.get('type'),
        city: this.get('city'),
        bedrooms: this.get('bedrooms'),
        image: this.get('image')
      };

      this.set('showUpdateForm', false);
      this.sendAction('saveChanges', rental, params);
    }
  }
});
