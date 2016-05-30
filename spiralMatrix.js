var myCode = require('./src');

var num = 24;
if(process.argv[2] !== undefined){
    num = parseInt(process.argv[2]);
}

myCode.printGrid(myCode.populateGrid(num));
