var WATER_POINT_TYPE = "WATER";
var EARTH_POINT_TYPE = "EARTH";
var POINT_TYPES = [WATER_POINT_TYPE, EARTH_POINT_TYPE];

var DEFAULT_WATER_COLOR = [30, 144, 255];
var DEFAULT_EARTH_COLOR = [105, 105, 105];
var DEFAULT_COLORS = {
  [WATER_POINT_TYPE]: DEFAULT_WATER_COLOR, // blue
  [EARTH_POINT_TYPE]: DEFAULT_EARTH_COLOR, // dark grey
};

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

class Map {
  constructor(height, width) {
    var map = [];
    for (var i = 0; i < height; i++) {
      var row = [];
      for (var j = 0; j < width; j++) {
        row.push(this.generatePointType());
      }
      map.push(row);
    }
    this.map = map;
  }

  generatePointType() {
    return POINT_TYPES[generateRandomInteger(2)];
  }

  generateRandomColor() {
    var color = undefined;
    while (!color || Object.keys(DEFAULT_COLORS).includes(color)) {
      color = [];
      for (var i = 0; i < 3; i++) {
        color.push(generateRandomInteger(256));
      }
    }
    return color;
  }

  getRawMap() {
    var rawMap = [];
    for (var i = 0; i < this.map.length; i++) {
      var row = [];
      for (var j = 0; j < this.map[i].length; j++) {
        row.push(DEFAULT_COLORS[this.map[i][j]]);
      }
      rawMap.push(row);
    }
    return rawMap;
  }

   /**
   *
   * @param {int} i index
   * @param {int} j index
   * @param {int} rows number of rows in grid
   * @param {int} cols number of cols in grid
   * @param {int[][]} grid the map
   * @returns {Boolean}
   */

  isEarth(i, j, rows, cols, grid) {
    return (
      i >= 0 &&
      i < rows &&
      j >= 0 &&
      j < cols &&
      grid[i][j].every((val, i) => val == DEFAULT_EARTH_COLOR[i])
    );
  }

  getColoredMap() {
    
    // TODO: That's where you work
    let grid = this.getRawMap();
    let currentColor = this.generateRandomColor();
    let rows = grid.length;
    let cols = grid[0].length;


    /**
     * 
     * @param {int} i index
     * @param {int} j index
     * @returns {void}
     */
    const traverse = (i, j) => {
      if (!this.isEarth(i, j, rows, cols, grid)) {
        return;
      }

      grid[i][j] = currentColor;
      traverse(i + 1, j); 
      traverse(i, j + 1); 
      traverse(i - 1, j); 
      traverse(i, j - 1); 
    };


    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (this.isEarth(i, j, rows, cols, grid)) {
          traverse(i, j, currentColor, rows, cols, grid);
          currentColor =  this.generateRandomColor();
        }
      }
    }
    return grid;
  }
}