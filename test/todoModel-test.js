/**

 * User: Sohel
 * Date: 4/21/16
 * Time: 12:43 AM
 */

describe('ToDo Model', function () {

  describe('Initialization', function () {
    beforeEach(function () {
      console.log('running test cases');
      this.todo = new todoApp.toDo();
    });

    it('should set the default complete status to false', function () {
      expect(this.todo.get('complete')).to.be.false;
    });

    it('should set the default title to empty string', function () {
      expect(this.todo.get('title')).to.equal('');
    });
  });

  describe('Persistence', function () {
    beforeEach(function () {
      this.todo = new todoApp.toDo();
      this.todo.saveStub = sinon.stub(this.todo, 'save');
    });
    afterEach(function () {
      this.todo.saveStub.restore();
    });

    it('should save title on change', function () {
      this.todo.set('title', 'New Title');
    });

    it('should save status on change', function () {
      this.todo.set('complete', true);
    });

  });

});