import { SuiteModuleBuilder } from '../suite';

const suite = SuiteModuleBuilder.create();

suite.module('indexOf');

suite.test('should return index of object', function(assert) {
  let expected = this.newFixture(3);
  let obj      = this.newObject(expected);
  let len      = 3;

  for (let idx = 0; idx < len; idx++) {
    assert.equal(obj.indexOf(expected[idx]), idx, `obj.indexOf(${expected[idx]}) should match idx`);
  }
});

suite.test('should return -1 when requesting object not in index', function(assert) {
  let obj = this.newObject(this.newFixture(3));
  let foo = {};

  assert.equal(obj.indexOf(foo), -1, 'obj.indexOf(foo) should be < 0');
});

export default suite;
