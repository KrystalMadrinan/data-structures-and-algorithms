'use strict';

const binaryArray = require('./array-binary-search.js');


describe('Testing Code Challenge 03', () => {
    it('Receives 2', () => {
        const testArr = [4, 8 ,15 ,16 ,23, 42];
        const testVal = 15;
        const testInsert = binaryArray(testArr, testVal);

        expect(testInsert).toStrictEqual(2);


        const testArr2 = [11, 22, 33, 44, 55, 66, 77];
        const testVal2 = 90;
        const testInsert2 = binaryArray(testArr2, testVal2);

        expect(testInsert2).toStrictEqual(-1);
    });
});


