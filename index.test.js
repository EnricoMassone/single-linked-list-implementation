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
