export class pila_lifo_jest {
  constructor() {
    this._items = new Array();
  }

  addItem(item) {
    this._items.push(item);
  }

  getItem() {
    this._items.pop();
  }
}
