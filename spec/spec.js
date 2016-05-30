var myCode = require('../src');

describe('dimensionCalc', function () {
    it('returns the dimension of the matrix based on num', function () {
        expect(myCode.dimensionCalc(0)).toEqual(1);
        expect(myCode.dimensionCalc(11)).toEqual(4);
        expect(myCode.dimensionCalc(24)).toEqual(5);
    });
});

describe('initializeGrid', function () {
    it('returns the two dimensional array needed to form a spiral matrix of num', function () {
        expect(myCode.initializeGrid(5)).toEqual([['-','-','-','-','-'],['-','-','-','-','-'],['-','-','-','-','-'],['-','-','-','-','-'],['-','-','-','-','-']]);
        expect(myCode.initializeGrid(3)).toEqual([['-','-','-'],['-','-','-'],['-','-','-']]);
    });
});


describe('populateGrid', function () {
    xit('returns a spiral matrix with zero at the center', function () {
        expect(myCode.populateGrid(15)).toEqual();
    });
    xit('returns a matrix containing values from 0 to num', function () {
        expect(myCode.populateGrid(10)).toEqual();
    });
});

