'use strict';

/*
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

Example: Input: [2, 4, 6, 8], 5 Output: [2, 4, 5, 6, 8]
*/


function insertShiftArray(array, value) {
    for(let i = 0; i< array.length; i++) {
        array.splice(2, 0, value);
    }
    return insertShiftArray;
}

module.exports = insertShiftArray;