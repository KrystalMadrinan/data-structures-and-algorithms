'use strict';

const arrayReverse = require('./array-reverse.js');

describe('Testing Code Challenge 01', () => {
    it('Reverses the array', () => {
        const testArr = [1, 2, 3, 4, 5, 6];
        const testReverse = arrayReverse(testArr);

        expect(testReverse).not.toStrictEqual(testArr);
        expect(testReverse).toStrictEqual([6, 5, 4, 3, 2, 1]);
    });
});