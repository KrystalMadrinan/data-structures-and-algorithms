'use strict';

/*
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
*/


function BinarySearch(array, key) {

    let elon = -1; 
 
    for (let i = 0; i < array.length; i++) {
        if (key === array[i]) {
            elon = i;
        };
    };
        return elon;
}

module.exports = BinarySearch;