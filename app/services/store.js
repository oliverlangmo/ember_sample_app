import Ember from 'ember';

export default Ember.Service.extend({
  getOrderById(id){
    const orders = this.getOrders();
    return orders.findBy('id', id);
  },
  getOrders(){
    return [
      {id: '1', name: 'Sam'},
      {id: '2', name: 'Max'}
    ];
  }
});
