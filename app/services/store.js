import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';


const products = [
  Product.create({title:'Tent', price: 10, description: '2 person tent'}),
  Product.create({title:'Sleeping Bag', price: 8, description: 'Warm Sleeping Bag'}),
  Product.create({title:'Flashlight', price: 6, description: 'Bright LED flashlight'}),
  Product.create({title:'First Aid Kit', price: 3, description: 'Be prepared with a first aid kit'})
];
const orders = [
  Order.create({id:'1234', name: 'Johnny Cash',
  items:[
    LineItem.create({product: products[0], quantity: 1}),
    LineItem.create({product: products[2], quantity: 2}),
    LineItem.create({product: products[1], quantity: 1}),
    LineItem.create({product: products[3], quantity: 3}),
 ]
}),
];

export default Ember.Service.extend({
  getOrderById(id){
    return orders.findBy('id', id);
  },
  getOrders(){
    return orders;
  },
getProducts() { return products;}
});
