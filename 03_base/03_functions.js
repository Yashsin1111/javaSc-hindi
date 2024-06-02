// function saymyname(){
//     console.log("Y");
//     console.log("A");
//     console.log("S");
//     console.log("H");

// }
// saymyname();

// function addtwonumber(number1 , number2){
//       console.log(number1+number2);
// }
// addtwonumber();//no return because argumnet not feeded

// function addtwonumber(number1,number2){
//     let result=number1+number2;
//     return result;
// }
// const result=addtwonumber(5,6);
// console.log(result);

function loggedin(username){
    return `${username},just logged in`
}
console.log(loggedin("yash"))
console.log(loggedin(""))//if string is empty it return is just logged in

console.log(loggedin())//if nothing is defined then return is undefinded,just logged in,else we can put the default value like,
//username="sam"

//better way to put a condition that the agument have some value if not return the function

// function loggedin(username){
//     if(username===undefined){//usually we can write (!username),undified and empty string is consider as false 
//         console.log("please enter the data ");
//         return;
//     }
//     return `${username},just logged in`
// }
// console.log(loggedin());

//+++++++++++++++++++++++++++++++ scope of a function +++++++++++++++++++++++++++++++++++++++++++++++++++++
function calculatecartprice(...num1){
    return num1;
}
console.log(calculatecartprice(200,300,566,899));
//here...num1,contains all the value that are passed in an argument and return in an array.
// if ,
// function calculatecartprice(value1,value2,...num1){
//     return num1;
// }
// console.log(calculatecartprice(200,300,566,899));
//here value1 take 1 argument and value2 takes 2 argument and ...num1 take rest of argumnet

//passing object in function
const user={
    username:"yash singh",
    price:500,
}
function handleobj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobj(user);

//we can directly passed object without creating
handleobj({
    username:"king",
    price:87,
})

//passing array in function
const newarray=[10,20,50,90];
function secondvalue(getarray){
    return getarray[1];
}
console.log(secondvalue(newarray));
// console.log(secondvalue([10,20,50,90]))without creating an array we can directly passed the array in function call

// //also we can do this
// let numbers = [ 1, 2, 3 ]
// let myFunction = (x, y, z) => {
//     return x + y + z;
// }

// // Returns 6
// let getCalculation = myFunction(numbers[0], numbers[1], numbers[2]);
// console.log(getCalculation);

//using spred method
let numbers = [ 1, 2, 3 ]
let myFunction = (x, y, z) => {
    return x + y + z;
}

// Returns 6
let getCalculation = myFunction(...numbers);
console.log(getCalculation);