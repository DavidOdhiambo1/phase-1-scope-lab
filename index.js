// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "peter"
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase()
}
function setBestCustomer(){
    bestCustomer = "not bob"
}
function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'bob'
}
console.log(leastFavoriteCustomer)