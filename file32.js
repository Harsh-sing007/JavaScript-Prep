import { getRandomValues } from "node:crypto"

const numbers = [10,20,30,40,50]
// let n1=numbers[0]
// let n2=numbers[1]

//ECMAScript
// const[n1,n2]= numbers
// console.log(n1)
// console.log(n2)


//rest operator
// const[n1,n2,...n3]= numbers
// console.log(n1)
// console.log(n2)
// conaole.log(n3)

// skip Values
// const[n1,,n2]= numbers
// console.log(n1)
// console.log(n2)


//default values
const[n1,n2,n3=10]= [12,15,20]
console.log(n1)
console.log(n2)
console.log(n3)