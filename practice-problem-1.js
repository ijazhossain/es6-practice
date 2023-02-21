/* 
1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.
*/
const multiplyThree = (x, y, z) => x * y * z;
const result = multiplyThree(2, 2, 2);
// console.log(result);


/* 
2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
*/

const line = `I am a web developer. 
I love to code. 
I love to eat biriyani.`;

// console.log(line);

/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const addTwo = (x, y = 3) => {
    return x + y;
}
console.log(addTwo(2));