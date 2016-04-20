/**

 * User: Sohel
 * Date: 4/20/16
 * Time: 11:55 PM
 */

var expect = chai.expect;

describe('Application', function(){
  it("creates a global variable named todoApp", function () {
    expect(todoApp).to.exist;
  });
});
