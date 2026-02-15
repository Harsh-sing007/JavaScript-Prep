//let score = 90
if(score > 50){
  console.log("You passed!");
  result="Passed";
}
else{
   result="Failed";
}
console.log(result);


//Ternary operator
//let score = 90  
let result2 = score > 50 ? "Passed" : "Failed";
console.log(result2);


//And  operators
//let score = 9
let result3 = score > 50 && "Passed";
console.log(result3); // false


//Or operators
//let score = 9   
let result4 = score || 50 
console.log(result4); 
