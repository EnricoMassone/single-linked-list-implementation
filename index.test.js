const { Node } = require("./index");
const { assert } = require("chai");

test("It is possible to instantiate new Node", () => {
  // ACT
  const result = new Node("test");

  // ASSERT
  assert.exists(result);
  assert.strictEqual(result.value, "test");
  assert.isNull(result.next);
});
