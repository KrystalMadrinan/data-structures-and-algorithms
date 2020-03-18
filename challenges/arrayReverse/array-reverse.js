'use strict';

// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

// Example: Input: [1, 2, 3, 4, 5, 6] Output: [6, 5, 4, 3, 2, 1]

let reverseArray = (array) => {
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}