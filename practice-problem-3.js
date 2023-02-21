/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/
const getSquareSumAverage = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const square = item * item;
        sum += square;
    }
    const average = sum / array.length;
    return average;
}
const result = getSquareSumAverage([1, 2, 3]);
console.log(result);
