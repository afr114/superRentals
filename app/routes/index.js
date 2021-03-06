import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },

  actions: {
    save2(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
  },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    saveChanges(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined){
          rental.set(key, params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    }
  }
});
