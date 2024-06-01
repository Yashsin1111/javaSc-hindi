//singleton-->are declare with the help of constructor , having single instace of object and classes,
//its a single point of contact from multiple components

// const tinderuser= new Object()//singleton
const tinderuser={};//non singleton
tinderuser.id="12cxx";
tinderuser.email="4876@ss";
tinderuser.islog="false";

// console.log(tinderuser);

const InstagramUser={
    email:"syash7157@gmail.com",
    fullname:{
        userFullName:{
        firstName:"yash",
        lastName:"singh"
    }
}
}
console.log(InstagramUser.fullname);
console.log(InstagramUser.fullname.userFullName.firstName);

//combing the objects
const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
// const obj3={obj1 , obj2};
// console.log(obj3);// same as in the arrays , here object inside the object
// const obj3=Object.assign({},obj1,obj2);//(target,source.....,...,....,...);
// console.log(obj3);
/*note-
here {} use to push all these object into an empty object,if we not using {},then all the object stored in obj1.
*/
//mostly used syntax is:
const obj3={...obj1,...obj2};//spread method
console.log(obj3);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
//with the help of object.  we psuh all the keys and values of tinderuser into arrays here we can prefrom all the 
//array operation,datatype is array.

console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('email'));//identify that this object exixt or not in your space

//+++++++++++++++++++++++++++++++++object de-structuring++++++++++++++++++++++++++++++++++++++++++++
const cousre={
    name:"chai or javascript",
    price:"free",
    cousreInstructor:"hitesh chaudhary",
}
// if we want to access the value then we can go through this syntax
// cousre.cousreInstructor
//but for the cleanness of the code we can (anather way to access the object values)
const {cousreInstructor: instructor}=cousre;//:...,we can assign new name to access.
// console.log(cousreInstructor);
console.log(instructor);
//this is JSON -DATA
{
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }

//conveting JSON data to object
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

console.log(text);
console.log(obj);
console.log(typeof text);
console.log(typeof obj);
// https://www.w3schools.com/js/js_json.asp
//to through this doc.and learn about JSON