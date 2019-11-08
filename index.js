class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get(index) {
    if (!Number.isInteger(index)) {
      throw new TypeError("Index must be an integer number");
    }

    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const answer = this._find(index, this._testByIndex);
    return answer === null
      ? undefined
      : answer.value;
  }

  _find(searchedValue, testPredicate) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (
        testPredicate(
          searchedValue,
          currentNode.value,
          currentIndex,
          currentNode
        )
      ) {
        return currentNode;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return null;
  }

  _testByIndex(searchedValue, _, currentIndex, __) {
    return searchedValue === currentIndex;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const currentTail = this.tail;
      currentTail.next = node;
      this.tail = node;
    }

    this.length++;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
