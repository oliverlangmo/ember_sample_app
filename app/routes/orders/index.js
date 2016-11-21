import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  createOrder(order){
    const name = order.get('name');
    alert(name + 'order saved!');
  }
},  
model(){
  const store= this.get('store');
  return store.newOrder();
},
  store: Ember.inject.service()
});
