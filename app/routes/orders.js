import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{id: '1', name: 'Sam'},
            {id: '2', name:'Max'}
    ];
  }
});
