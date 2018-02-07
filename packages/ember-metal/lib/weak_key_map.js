export default class WeakKeyMap {
  constructor() {
    this.keys = new WeakMap();
  }

  has(object, key) {
    let values = this.keys.get(object);

    if (values === undefined) {
      return false;
    } else {
      return values.has(key);
    }
  }

  get(object, key) {
    let values = this.keys.get(object);

    if (values !== undefined) {
      return values.get(key);
    }
  }

  set(object, key, value) {
    let values = this.keys.get(object);

    if (values === undefined) {
      values = new Map();
      this.keys.set(object, values);
    }

    values.set(key, value);
  }

  delete(object, key) {
    let values = this.keys.get(object);

    if (values !== undefined) {
      return values.delete(key);
    }
  }
}
