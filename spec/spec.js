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
        expect(myCode.initializeGrid(5)).toEqual([[' ',' ',' ',' ',' '],[' ',' ',' ',' ',' '],[' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' '],[' ',' ',' ',' ',' ']]);
        expect(myCode.initializeGrid(3)).toEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
    });
});


describe('populateGrid', function () {

        var arraysAreSame = function(x, y) {
            var returnValue = true;
            for(var i = 0; i < x.length; i++) {
                if (x[i] !== y[i]) {
                    returnValue = false;
                }
            }
            return returnValue;
        };

    var twodarraysAreSame = function(x, y) {
        var returnValue = true;
        for(var i = 0; i < x.length; i++) {
            if (!arraysAreSame(x[i] ,y[i])) {
                returnValue = false;
            }
        }
        return returnValue;
    };

    beforeEach(function() {
        jasmine.addCustomEqualityTester(twodarraysAreSame);
    });
    it('returns a spiral matrix with zero at the center', function () {
        expect(myCode.populateGrid(15)).toEqual([[6,7,8,9], [5,0,1,10], [4,3,2,11], [15,14,13,12]]);
        expect(myCode.populateGrid(10)).toEqual([[6,7,8,9], [5,0,1,10], [4,3,2,' '], [' ',' ' ,' ' ,' ' ]]);
        expect(myCode.populateGrid(-10)).toEqual([[-6,-7,-8,-9], [-5,0,-1,-10], [-4,-3,-2,' '], [' ',' ' ,' ' ,' ' ]]);
    });
});

