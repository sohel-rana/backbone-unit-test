/**

 * User: Sohel
 * Date: 3/30/16
 * Time: 6:21 PM
 */

if(typeof todoApp === 'undefined'){
  todoApp = {};
}

todoApp.ToDo = Backbone.Model.extend({
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

todoApp.ToDoListItem = Backbone.View.extend({
  tagName : 'li',

  initialize: function () {

  },
  template : _.template("<label>" +
      "<input type='checkbox' <% if(complete) print('checked')%>>" +
    "<%=title %>"),

  render : function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});