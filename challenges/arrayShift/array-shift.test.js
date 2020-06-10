'use strict';

const shiftArray = require('./array-shift.js');


describe('Testing Code Challenge 02', () => {
    it('Adds new value in middle of array', () => {
        const testArr = [2, 4, 6, 8];
        const testVal = 5;
        const testInsert = shiftArray(testArr, testVal);

        expect(testInsert).toStrictEqual([2, 4, 5, 6, 8]);
    });
});
