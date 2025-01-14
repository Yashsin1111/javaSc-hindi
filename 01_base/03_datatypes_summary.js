let score =33;
console.log(typeof score)//return number
//suppose , score="33abc";
let valueinnumber=number(score);
console.log(typeof valueinnumber);//return number 
console.log(valueinnumber)//return NaN 


//primitive
// number , boolean , string , BigInt , symbol , null

//non-primitive(reference)
//array , object , function

let marksobt=null;//null is a type of object;
console.log(typeof marksobt);
let myschool;//when we not initialised the value of any variable , its type is undefied;
console.log(typeof myschool);

//now symbols, its They are used to represent unique values that can be used as identifiers 
//or keys in objects. They are also used to create private properties and methods in classes

let sym=Symbol("546");
let newsymb=Symbol("546");
console.log(sym===newsymb);

const Bignumber=4444444444444444444888n//to large to present so be take n last index of number then it coverted into big int.

//lets create an object in js

let employed={
    Name: "yash kumar singh",
    salary:10000,
    address:"ballia",
    post:"sof.dev",
}
console.log(employed);
console.log(typeof employed);//return object;

//we will discuss array in javascript later,

//+++++++++++++++++++++++++++++++++++memory allocation+++++++++++++++++++++++++++++++++++++++++++++++
//memory store either in stack or in heap
//in primitive datatypes the memory stored in stack and copy of variable passed , because of this when we try to change
//the actual value but actually we are changing the copied value;
let mygmail="syash7157@gmail.com";
let secondmail=mygmail;
secondmail="yash886577@gmail.com";

console.log(mygmail);
console.log(secondmail);//se no change occurs.


//let see heap memory in non-premitive datatypes,as here the change are done in actual memory space ,variable having the reference 
//of allocated data when we try to change the actual changes arrises.
let employee={
    email:"syash7157@gmail.com",
    
}
let mydetails=employee;
mydetails.email = "yash886577@gmail.com";
console.log(employee.email);
console.log(mydetails.email);
