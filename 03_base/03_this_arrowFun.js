const data={
    username:"yash",
    price:3093,

    welcomemessage:function(){
        console.log(`${this.username},welcome to node`);//this refers to the current context of the function.
        // inside this object the current contxt is username,price so by using this.username and this.price we can
        //access the data.
        // console.log(this);//this function shows how thw current context chnages
    }
}
data.welcomemessage();
data.username="anshu";//here the current context is changes due to change is username
data.welcomemessage();
console.log(this);//retuen empty but if we run this in browser it return the window object,the most prefered global object is 
//windows object that's why we can access all the event of windows.

//+++++++++++++++++++++++++++++++IMPORTANT CONCEPT++++++++++++++++++++++++++++++++++++++++++++++

// function chai(){
//     console.log(this);//it return many values like global values , timeintervals, microtaskes, performances ,etc.
// }
// chai();

// function chai(){
//     let username="yash singh";
//     console.log(this);//it return many values like global values , timeintervals, microtaskes, performances ,etc.
// }
// chai();

// function chai(){
//     let username="yash singh";
//     console.log(this.username);//this innvoke in object not in function,return undefined
// }
// chai();

// const newdata= function chai(){
//     let username="yash singh";
//     console.log(this.username);//this innvoke in object not in function,return undefined
// }
// chai();

//let do this in arrow function
const chai=()=>{
    let username="hitesh";
    console.log(this);// return empty parenthisis. 
}
chai();

//arrow function-->

// const addtwo =(num1,num2)=>{
//     return num1+num2 // called explicit return , when return keyword is used
// }
// console.log(addtwo(5,9))

//we can use it in anather way , known as implicit return

// const addtwo =(num1,num2)=>num1+num2// for the betterment for the program rap it into the curly braces

const addtwo=(num1,num2)=>(num1+num2)//if curly braces is 
//used then no need to write the return keyword , if parenthesis is used then we have to write the return keyword.
console.log(addtwo(5,9))


//example if we have to return the object.

const obj=(num1,num2)=>({username: "yash"})
console.log(obj(5,8))