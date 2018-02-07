export default class WeakKeySet {
  constructor() {
    this.keys = new WeakMap();
  }

  has(object, key) {
    let keys = this.keys.get(object);
    
    if (keys === undefined) {
      return false;
    } else {
      return keys.has(key);
    }
  }

  add(object, key) {
    let keys = this.keys.get(object);

    if (keys === undefined) {
      keys = new Set();
      this.keys.set(object, keys);
    }

    keys.add(key);
  }
}
