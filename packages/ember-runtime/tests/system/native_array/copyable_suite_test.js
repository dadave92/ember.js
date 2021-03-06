import { generateGuid } from 'ember-utils';
import { A as emberA } from '../../../mixins/array';
import CopyableTests from '../../suites/copyable';

CopyableTests.extend({
  name: 'NativeArray Copyable',

  newObject() {
    return emberA([generateGuid()]);
  },

  isEqual(a, b) {
    if (!(a instanceof Array)) {
      return false;
    }

    if (!(b instanceof Array)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    return a[0] === b[0];
  }

}).run();

QUnit.module('NativeArray Copyable');

QUnit.test('deep copy is respected', function(assert) {
  let array = emberA([{ id: 1 }, { id: 2 }, { id: 3 }]);

  let copiedArray = array.copy(true);

  assert.deepEqual(copiedArray, array, 'copied array is equivalent');
  assert.ok(copiedArray[0] !== array[0], 'objects inside should be unique');
});
