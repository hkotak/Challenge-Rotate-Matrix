const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here 

    let myMatrix = this.matrix
    let innerArr = []; // will loop through and add 0 index values into this arr as we are rotating the matrix;
    let newMatrix = []; // new arrays will be pushed into this array to create a new matrix;

    console.log(myMatrix);
    console.log("direction: ", direction);

    if (direction === Direction.CW) {
      while (myMatrix[0].length > 0) { // while loop will continue looping WHILE there is a value in [0] which is the entire first array within the full matrix array;
        for (let i=myMatrix.length-1; i>=0; i--) { // running through the rest of the arrays but in                                                     reverse 
          innerArr.push(myMatrix[i][0]); // pushing the [0] index value of each array[i] into an empty                                      array 
          myMatrix[i].shift(); // shift removes the first element of each array
        } // forLoop ends when the last [0] value of each array[i] is pushed into innerArr
        newMatrix.push(innerArr); 
        innerArr = []; //innerArr is reset to empty as while loop will run again as first array still has a values within it 
      } 
      
      console.log("**********************")
      this.matrix = newMatrix;
      console.log(newMatrix);
    }


    else if (direction === Direction.CCW) {
      while (myMatrix[0].length > 0) {
        for (let i=0; i<myMatrix.length; i++) {
          innerArr.push(myMatrix[i] [myMatrix[i].length-1]); 
          myMatrix[i].pop(); // pop removes the last index of each array
        }
        newMatrix.push(innerArr);
        innerArr = [];
      }
      console.log("**********************")
      this.matrix = newMatrix;
      console.log(newMatrix);
    }



    // must be a valid Direction, see Direction.js

    }
};


