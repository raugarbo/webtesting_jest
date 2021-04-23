import { pila_lifo_jest } from './pila_lifo_jest';

describe('GIVEN a new queue', () => {
  const sut = new pila_lifo_jest();
  test('THEN I add a item', () => {
    sut.addItem({ item: 1 });
    const actual = sut._items.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});

describe('GIVEN a new queue', () => {
  const sut = new pila_lifo_jest();
  test('THEN I add two items to queue', () => {
    sut.addItem({ item: 1 });
    sut.addItem({ item: 2 });
    const actual = sut._items.length;
    const expected = 2;
    expect(actual).toBe(expected);
  });
});

describe('GIVEN a new queue', () => {
  const sut = new pila_lifo_jest();
  test('THEN I add two items to queue and substrac one', () => {
    sut.addItem({ item: 1 });
    sut.addItem({ item: 2 });
    sut.getItem();
    const actual = sut._items.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
/*
test('add item to queue', () => {
    const sut = new pila_lifo();
    sut.addItem({ item: 1 });
    const actual = sut._items.length;
    const expected = 1;
    expect('1 item on queue', actual, expected);
  });
  
  test('add two items to queue', () => {
    const sut = new pila_lifo();
    sut.addItem({ item: 1 });
    sut.addItem({ item: 2 });
    const actual = sut._items.length;
    const expected = 2;
    expect('2 items on queue', actual, expected);
  });
  
  test('add two items and substract one to queue', () => {
    const sut = new pila_lifo();
    sut.addItem({ item: 1 });
    sut.addItem({ item: 2 });
    sut.getItem();
    const actual = sut._items.length;
    const expected = 1;
    expect('1 item on queue', actual, expected);
  });
  */
