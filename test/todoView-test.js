/**

 * User: Sohel
 * Date: 4/21/16
 * Time: 12:33 PM
 */

describe('Todo List Item View', function () {

  beforeEach(function () {
    this.todo = new todoApp.ToDo({title : 'summary'});
    this.item = new todoApp.ToDoListItem({model : this.todo});
  });


  it('render() should return an object', function () {
    expect(this.item.render()).to.equal(this.item);
  });

  it('should render an li', function () {
    expect(this.item.render().el.nodeName).to.equal('LI');
  });

  describe('Template', function () {

    it('should contain the todo title as text', function () {
      expect(this.item.render().$el.text()).to.equal('summary');
    });

    it('should contain a label', function () {
      expect(this.item.render().$el.find('label')).to.have.length(1);
    });

    it('should contain a check box', function () {
      expect(this.item.render().$el.find('input[type="checkbox"]')).to.have.length(1);
    });

    it('should default to false', function () {
      expect(this.item.render().$el.find('input[type="checkbox"]').is(':checked')).to.be.false;
    });

    it('should be set to true for complete todos', function () {
      this.saveStub = sinon.stub(this.todo, 'save');
      this.todo.set('complete', true);
      this.item.render();
      expect(this.item.render().$el.find('input[type="checkbox"]').is(':checked')).to.be.true;
      this.saveStub.restore();
    });

  });
});

describe('Todo List Item View')