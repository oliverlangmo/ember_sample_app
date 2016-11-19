import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return [{id: '1', name: 'Sam'},
            {id: '2', name:'Max'}
    ].findBy('id', params.order_id);
  }
});
