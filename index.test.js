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

test("Get throws TypeError when index is not an integer", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");

  // ACT
  try {
    target.get("not an integer");
  } catch (error) {
    assert.exists(error);
    assert.instanceOf(error, TypeError);
    return;
  }

  throw new Error("An exception was expected");
});

test("It is possible to delete the only node of a single item list", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");

  // ACT
  const result = target.delete(0);

  // ASSERT
  assert.strictEqual("foo", result);

  assert.strictEqual(0, target.length);

  assert.isNull(target.head);
  assert.isNull(target.tail);
});

test("It is possible to delete the list head", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");
  target.push("buzz");

  // ACT
  const result = target.delete(0);

  // ASSERT
  assert.strictEqual("foo", result);

  assert.strictEqual(2, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);
  assert.strictEqual(target.head.value, "bar");
  assert.strictEqual(target.tail.value, "buzz");

  assert.strictEqual(target.get(0), "bar");
  assert.strictEqual(target.get(1), "buzz");
});

test("It is possible to delete the list tail", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");
  target.push("buzz");

  // ACT
  const result = target.delete(2);

  // ASSERT
  assert.strictEqual("buzz", result);

  assert.strictEqual(2, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);
  assert.strictEqual(target.head.value, "foo");
  assert.strictEqual(target.tail.value, "bar");

  assert.strictEqual(target.get(0), "foo");
  assert.strictEqual(target.get(1), "bar");
});

test("It is possible to delete an item in the middle of the list", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");
  target.push("buzz");
  target.push(13);

  // ACT
  const result = target.delete(1);

  // ASSERT
  assert.strictEqual("bar", result);

  assert.strictEqual(3, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);
  assert.strictEqual(target.head.value, "foo");
  assert.strictEqual(target.tail.value, 13);

  assert.strictEqual(target.get(0), "foo");
  assert.strictEqual(target.get(1), "buzz");
  assert.strictEqual(target.get(2), 13);
});

test("Delete returns undefined when index is less than 0", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");
  target.push("buzz");

  // ACT
  const result = target.delete(-1);

  // ASSERT
  assert.isUndefined(result);

  assert.strictEqual(3, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);
  assert.strictEqual(target.head.value, "foo");
  assert.strictEqual(target.tail.value, "buzz");

  assert.strictEqual(target.get(0), "foo");
  assert.strictEqual(target.get(1), "bar");
  assert.strictEqual(target.get(2), "buzz");
});

test("Delete returns undefined when index equals list length", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");
  target.push("buzz");

  // ACT
  const result = target.delete(3);

  // ASSERT
  assert.isUndefined(result);

  assert.strictEqual(3, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);
  assert.strictEqual(target.head.value, "foo");
  assert.strictEqual(target.tail.value, "buzz");

  assert.strictEqual(target.get(0), "foo");
  assert.strictEqual(target.get(1), "bar");
  assert.strictEqual(target.get(2), "buzz");
});

test("Delete returns undefined when index is greater than list length", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");
  target.push("buzz");

  // ACT
  const result = target.delete(4);

  // ASSERT
  assert.isUndefined(result);

  assert.strictEqual(3, target.length);

  assert.exists(target.head);
  assert.exists(target.tail);
  assert.strictEqual(target.head.value, "foo");
  assert.strictEqual(target.tail.value, "buzz");

  assert.strictEqual(target.get(0), "foo");
  assert.strictEqual(target.get(1), "bar");
  assert.strictEqual(target.get(2), "buzz");
});

test("Delete throws TypeError when index is not an integer", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("foo");
  target.push("bar");

  // ACT
  try {
    target.delete("not an integer");
  } catch (error) {
    assert.exists(error);
    assert.instanceOf(error, TypeError);
    return;
  }

  throw new Error("An exception was expected");
});

test("Pop returns undefined when list is empty", () => {
  // ARRANGE
  const target = new LinkedList();

  // ACT
  const result = target.pop();

  // ASSERT
  assert.isUndefined(result);
});

test("It is possible to pop from list with one item", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("test");

  // ACT
  const result = target.pop();

  // ASSERT
  assert.strictEqual(result, "test");

  assert.strictEqual(target.length, 0);

  assert.isNull(target.head);
  assert.isNull(target.tail);
});

test("It is possible to pop from list with two items", () => {
  // ARRANGE
  const target = new LinkedList();
  target.push("test");
  target.push(13);

  // ACT
  const result = target.pop();

  // ASSERT
  assert.strictEqual(result, 13);

  assert.strictEqual(target.length, 1);

  assert.strictEqual(target.head.value, "test");
  assert.strictEqual(target.tail.value, "test");
  assert.strictEqual(target.head, target.tail);

  assert.strictEqual(target.get(0), "test");
});