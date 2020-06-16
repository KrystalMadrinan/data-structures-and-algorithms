'use strict';

/* 

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Your LinkedList class should have the following functions/methods:

Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
insert() - A function that takes any value as an argument and adds a new Node with that value to the beginning of the list (before the current head)

Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
includes() - A function that takes in a value as an argument and returns true or false if that value was found in the list

Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
toString() - A function that takes no arguments but prints out a visual representation of the Linked List, similar to the format: { a } -> { b } -> { c } -> NULL

Note that any errors in your LinkedList class and methods should be well handled and logged. Don’t default to the standard thrown error; instead use try catch blocks to correctly catch errors and log a user-friendly and descriptive message to the console.

*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// DO TRY CATCHES

class LinkedList {
    constructor() {
        // Defaults to null
        this.head = null;
    }

    insert(val) {
        try {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;

            return this.head;
        }
        catch (error) {
            console.error('NEW NODE NOT ADDED TO BEGINNING');
        }

    }

    includes(val) {
        try {
            let currentVal = this.head;

            while (currentVal) {
                // Return true only if current value is truly equal (exists)
                if (currentVal.val === val) {
                    return true;
                } else {
                    currentVal = currentVal.next;
                }
            }
            return false;
        }
        catch(error) {
            console.error('NO VALUE FOUND IN TEST');
        }
    }

    toString() {

    }
}


module.exports = LinkedList;