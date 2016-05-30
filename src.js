module.exports = {

    dimensionCalc: function (num) {
        return Math.ceil(Math.sqrt(num + 1));
    },
    initializeGrid: function (size) {
        var grid = [];
        for (var i = 0; i < size; i++) {
            var innerArray = [];
            for (var j = 0; j < size; j++) {
                innerArray[j] = '-';
            }
            grid[i] = innerArray;
        }
        return grid;
    },
    populateGrid: function (num) {
        var size = dimensionCalc(num);
        var grid = initializeGrid(size);
        var x = Math.floor((size - 1) / 2);
        var y = x;
        var xMin = x;
        var yMin = y;
        var xMax = x + 1;
        var yMax = y;
        var direction = "right";
        for (var counter = 0; counter <= num; counter++) {
            grid[y][x] = counter;
            //printGrid(grid);
            switch (direction) {
                case "right":
                    if (x < xMax) {
                        x++
                    } else {
                        direction = "down";
                        yMax++;
                        y++
                    }
                    break;

                case "down":
                    if (y < yMax) {
                        y++;
                    } else {
                        direction = "left";
                        xMin--;
                        x--;
                    }
                    break;
                case "left":
                    if (x > xMin) {
                        x--;
                    } else {
                        direction = "up";
                        yMin--;
                        y--;
                    }
                    break;
                case "up":
                    if (y > yMin) {
                        y--;
                    } else {
                        direction = "right";
                        xMax++;
                        x++;
                    }
                    break;
            }
        }
        return grid;
    },

    printGrid: function (grid) {
        console.log('----------------------');
        for (var i = 0; i < grid.length; i++) {
            var row = grid[i].join('\t');
            console.log(row);
        }
        console.log('----------------------');
    }
};
