//setTimeout()
// function f1(){
// setTimeout(()=>{console.log("Hello")},1000)
// }
// //we have delayed f1 using setTimeout
// function f2()
// {
//     console.log("This is f2 function")
// }
// f1()
// f2()

//promises
//A Promise is an object that represents the future result of an asynchronous operation.

// function f1(){
//     console.log("This is F1 function")
// }
// function f2(){
//     console.log("This is F2 function")
   
// }
// f1()
// f2()



function makepayment(){
setTimeout(()=>{console.log("Payment has been processed")},1000)
}

function sendConfirmation()
{
    console.log("Order has been placed Successfully")
}
makepayment()
sendConfirmation()