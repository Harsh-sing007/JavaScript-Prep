//Hoisting with var 
// console.log(name)
// var name = "John"

// var name
// console.log(name)
// name = "John"


//Hoisting with let and const
// console.log(name)
// let  name = "John"


// let  name
// console.log(name)
// name = "John"


//Function are fully hoisted
// greet()
// function greet()
// {
//     console.log("Hello World")
// }


const greet = () =>{
    console.log("Hello World")
}

greet()