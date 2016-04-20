/**

 * User: Sohel
 * Date: 3/30/16
 * Time: 6:21 PM
 */

if(typeof todoApp === 'undefined'){
  todoApp = {};
}

todoApp.toDo = Backbone.Model.extend({
  defaults : {
    title : '',
    complete : false
  },

  initialize : function () {
    var me = this;
    this.on('change', function () {
      me.save();
    });
  }


});