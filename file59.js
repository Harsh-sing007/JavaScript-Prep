// student ={
//     name:"Harsh",
//     display:function(){
//         console.log(this.name)
//     }
// }
// student.display()


// student ={
//     name:"Harsh",
//     display: () => {
//         console.log(this.name);
//     },
// };
// student.display();


student ={
    name:"Harsh",
    display() {
        console.log(this.name);
    },
};
student.display();