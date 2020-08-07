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
  }
}

/**
 * Class representing a singly-linked list. A list is an ordered data structure comprised of individual 
 * nodes, similar to an array, and has properties on it to indicate the first node (the head), the last
 * node (the tail), and the current length. In a singly-linked list, each node points only to the next 
 * node in the list.
 */
class SinglyLinkedList {
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

  }

  /**
   * Removes the last node from the list.
   *
   * @returns {*} The value of the node removed from the list
   * @memberof SinglyLinkedList
   */
  pop() {

  }

  /**
   * Prepends a new node to the list.
   *
   * @param {*} value Value of the node to be prepended to the list
   * @returns {SinglyLinkedList} The entire list with the newly-prepended node
   * @memberof SinglyLinkedList
   */
  unshift(value) {

  }

  /**
   * Removes the first node from the list.
   *
   * @returns {*} The value of the node removed from the list
   * @memberof SinglyLinkedList
   */
  shift() {

  }

  /**
   * Finds a node at a specific position in the list.
   *
   * @param {number} index The index at which to find the target node
   * @returns {*} The value of the node found at the the provided index
   * @memberof SinglyLinkedList
   */
  get(index) {

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

  }

  /**
   * Removes a node from the list at a specific position.
   *
   * @param {number} index The index at which to remove the node
   * @returns {*} The value of the node removed from the list
   * @memberof SinglyLinkedList
   */
  remove(index) {

  }

  /**
   * Reverses the list in place.
   *
   * @returns {SinglyLinkedList}
   * @memberof SinglyLinkedList
   */
  reverse() {

  }
}
