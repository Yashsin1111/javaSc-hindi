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