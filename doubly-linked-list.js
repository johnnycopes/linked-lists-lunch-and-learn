/**
 * Class representing a node, which is the element that a linked list is comprised of.
 */
class Node {
  /**
   * Creates an instance of Node.
   *
   * @param {*} value The value of the node
   * @memberof Node
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Class representing a singly-linked list. A list is an ordered data structure comprised of individual
 * nodes, similar to an array, and has properties on it to indicate the first node (the head), the last
 * node (the tail), and the current length. In a singly-linked list, each node points only to the next
 * node in the list.
 */
class DoublyLinkedList {
  /**
   * Creates an instance of SinglyLinkedList.
   *
   * @memberof SinglyLinkedList
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Appends a new node to the list.
   * 
   * @param {*} value Value of the node to be appended to the list
   * @returns {SinglyLinkedList} The entire list with the newly-appended node
   * @memberof SinglyLinkedList 
   */
  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Removes the last node from the list.
   *
   * @returns {*} The value of the node removed from the list
   * @memberof SinglyLinkedList
   */
  pop() {
    if (!this.length) {
      return;
    }
    const nodeToPop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToPop.prev;
      this.tail.next = null;
    }
    this.length--;
    return nodeToPop.value;
  }

  /**
   * Prepends a new node to the list.
   *
   * @param {*} value Value of the node to be prepended to the list
   * @returns {SinglyLinkedList} The entire list with the newly-prepended node
   * @memberof SinglyLinkedList
   */
  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Removes the first node from the list.
   *
   * @returns {*} The value of the node removed from the list
   * @memberof SinglyLinkedList
   */
  shift() {
    if (!this.length) {
      return;
    }
    const nodeToShift = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToShift.next;
      this.head.prev = null;
      nodeToShift.next = null;
    }
    this.length--;
    return nodeToShift.value;
  }

  /**
   * Finds a node at a specific position in the list.
   *
   * @param {number} index The index at which to find the target node
   * @returns {*} The value of the node found at the the provided index
   * @memberof SinglyLinkedList
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current;
    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current.value;
  }

  /**
   * Update a node in the list at a specific position.
   *
   * @param {number} index The index at which to change the value
   * @param {*} value The new value with which to update the existing value
   * @returns {boolean} Returns true if the operation succeeded and false if it didn't
   * @memberof SinglyLinkedList
   */
  set(index, value) {
    const targetNode = this.get(index);
    if (targetNode) {
      targetNode.val = value;
      return true;
    }
    return false;
  }

  /**
   * Add a new node to the list at a specific position.
   *
   * @param {number} index The index at which to add the new value
   * @param {*} value The new value to add to the list
   * @returns {boolean} Returns true if the operation succeeded and false if it didn't
   * @memberof SinglyLinkedList
   */
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.length) {
      return !!this.push(value);
    } else {
      const newNode = new Node(value);
      const prevNode = this.get(index - 1);
      const nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
      return true;
    }
  }

  /**
   * Removes a node from the list at a specific position.
   *
   * @param {number} index The index at which to remove the node
   * @returns {*} The value of the node removed from the list
   * @memberof SinglyLinkedList
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const prevNode = this.get(index - 1);
      const targetNode = prevNode.next;
      const nextNode = targetNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
      return targetNode.value;
    }
  }

  /**
   * Reverses the list in place.
   *
   * @returns {SinglyLinkedList}
   * @memberof SinglyLinkedList
   */
  reverse() {
    let head = this.head;
    this.head = this.tail;
    this.tail = head;

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      const prev = current.prev;
      current.prev = current.next;
      current.next = prev;
      current = current.next;
    }
    return this;
  }
}
