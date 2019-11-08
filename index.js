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

  delete(index) {
    if (!Number.isInteger(index)) {
      throw new TypeError("Index must be an integer number");
    }

    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      const currentHead = this.head;

      if (currentHead.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = currentHead.next;
      }

      this.length--;

      return currentHead.value;
    } else {
      const nodeBefore = this._find(index - 1, this._testByIndex);
      const nodeToBeDeleted = nodeBefore.next;
      const nodeAfter = nodeToBeDeleted.next;

      if (nodeAfter === null) {
        nodeBefore.next = null;
        this.tail = nodeBefore;
      } else {
        nodeBefore.next = nodeAfter;
      }

      this.length--;

      return nodeToBeDeleted.value;
    }
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
