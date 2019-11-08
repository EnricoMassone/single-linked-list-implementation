const { Node, LinkedList } = require("./index");
const { assert } = require("chai");

test("It is possible to instantiate new Node", () => {
  // ACT
  const result = new Node("test");

  // ASSERT
  assert.exists(result);
  assert.strictEqual(result.value, "test");
  assert.isNull(result.next);
});

test("It is possible to instantiate new LinkedList", () => {
  // ACT
  const result = new LinkedList();

  // ASSERT
  assert.exists(result);
  assert.strictEqual(result.length, 0);
  assert.isNull(result.head);
  assert.isNull(result.tail);
});

test("It is possible to push a value to an empty list", () => {
  // ARRANGE
  const target = new LinkedList();

  // ACT
  target.push("test");

  // ASSERT
  assert.strictEqual(1, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);

  assert.strictEqual(target.head.value, "test");
  assert.strictEqual(target.tail.value, "test");
  assert.strictEqual(target.head, target.tail);

  assert.strictEqual(target.get(0), "test");
});

test("It is possible to push a value to list containing one item", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push(13);

  // ACT
  target.push("test");

  // ASSERT
  assert.strictEqual(2, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);

  assert.strictEqual(target.head.value, 13);
  assert.strictEqual(target.tail.value, "test");

  assert.strictEqual(target.get(0), 13);
  assert.strictEqual(target.get(1), "test");
});

test("It is possible to push a value to list containing more than one item", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push(13);
  target.push(true);

  // ACT
  target.push("test");

  // ASSERT
  assert.strictEqual(3, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);

  assert.strictEqual(target.head.value, 13);
  assert.strictEqual(target.tail.value, "test");

  assert.strictEqual(target.get(0), 13);
  assert.strictEqual(target.get(1), true);
  assert.strictEqual(target.get(2), "test");
});

test("Get returns undefined when index is less than zero", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");

  // ACT
  const result = target.get(-1);

  // ASSERT
  assert.isUndefined(result);
});

test("Get returns undefined when index equals list length", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");

  // ACT
  const result = target.get(2);

  // ASSERT
  assert.isUndefined(result);
});

test("Get returns undefined when index is greater than list length", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");

  // ACT
  const result = target.get(3);

  // ASSERT
  assert.isUndefined(result);
});
