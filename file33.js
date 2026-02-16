// const student = {
//     name:"John",
//     age:21
// }


//destructuring
// const{name,age} = student
// console.log(name)
// console.log(age)


// const names = ["John", "Cathy", "Mike"];

// const [first, second, third] = names;

// console.log(first);  // John
// console.log(second); // Cathy
// console.log(third);  // Mike


// const {n1, n2}=student
// console.log(n1)
// console.log(n2)

//const {name:userName} = student
//console.log(userName)


// const student = {
//     name:"John";
//     age:21,
//     city:"Jalandhar"
// }
// const{city="Amritsar"}=student
// console.log(city)



const student = {
    name:"John",
    age:21,
    marks:{
        math:90,
        science:60
    }
}
const {marks} = student
console.log(marks)
const {marks:{math}} =student
console.log(math)
