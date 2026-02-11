let cart = []

//click on add to cart button on iphone product
cart = [...cart,{name:"iphone",price:45000,qty:1}]
console.log(cart)
  
//click on add to cart button on speaker product
cart = [...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart)


const order = {
    email:"john@gmail.com",
    items:cart,
    orderValue:46000,
    status:"pending"
}

db.orders.insertOne(order)

//Create flipcart database, collection order> email, items, orderValue, status, orderDate. collections users>  name, email, password, role
//Insert seed data
//write aggregate query to display all the orders
//placed by a particular user 