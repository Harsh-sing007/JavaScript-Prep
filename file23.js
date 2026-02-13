numbers = [5, 3, 6, 1]

numbers.forEach(() => {})
// numbers.forEach((num) => {
//   console.log(num);
// });
//Used to loop through an array and perform an action for each element.

numbers.map(() => {})
//Used to transform each element in an array.
// const double = numbers.map((num) => {
//   return num * 2;
// });
// console.log(doubled); 
// // [10, 6, 12, 2]

numbers.filter(() => {})
//Used to select elements based on a condition.Includes only elements that return true
// const greaterThan4 = numbers.filter((num) => {
//   return num > 4;
// });
// console.log(greaterThan4);
// [5, 6]

numbers.reduce(() => {})
//Used to reduce an array into a single value.Returns one final result (number, object, string, etc.)
// const sum = numbers.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log(sum);
//  15

numbers.find(() => {})
//Used to find the first element that matches a condition.Returns only the first match
// const firstGreaterThan4 = numbers.find((num) => {
//   return num > 4;
// });
// console.log(firstGreaterThan4);
// 5

numbers.some(()=>{})
// Checks whether at least one element in an array satisfies a condition.
// const result = numbers.some((num) => {
//   return num > 20;
// });
// console.log(result);  false

numbers.every(()=>{})
//Checks whether all elements in an array satisfy a condition.
// const result = numbers.every((num) => {
//   return num > 20;
// });
// console.log(result);  false



//-----------------------------------------------------------------------------------------------------------------------------------
// Need to loop only → forEach

// Need to modify all items → map

// Need to remove some items → filter

// Need to get one result → reduce

// Need to find one item → find

//--------------------------------------------------------------------------------------------------------------------------------
