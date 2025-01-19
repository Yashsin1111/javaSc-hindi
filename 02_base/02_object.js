//singleton-->when ever we declare an object literals then singleton not formed.
//object.create, use to create singleton

//object literals

const mysmb=Symbol("mykey1");//we are declare a symbol and we want to use this as a symbol

const user={
    name:"yash kumar singh", //js takes key as string eg:name="name";
    "full name":"anshu"//we can't access this (.) operator we need square braces.
    age:21,
    [mysmb]:"mykey",//declare mysmb in square braces,to use as a symbol
    address:"kalpana colony thikampur ballia",
    email:"syash7157@gmail.com",
    isLoggedIn:"false",
    LastLogged:["monday","tuesday"],
}
console.log(user.email);//we can declare by using dot(.),but use [" "],is an efficient way to display it.
console.log(user["email"]);
// console.log(user[full name]);
// console.log(user.mysmb);
// console.log(typeof user.mysmb);//return string 
// console.log(typeof user[mysmb]);// act as symbol
// console.log(user);//act as a symobol by removing square brackets it act like a normal string.

user.email="yash886577@gmail.com";//here chnages are preformed
// Object.freeze(user);//we can freeze the object no change are preformed
// console.log(user);

user.greeting=function(){
    console.log("hellow my name is yash");
}
// console.log(user.greeting);//function reference,we will discuss it later
console.log(user.greeting());

user.greeting2=function(){
    console.log(`hellow my name is,${this.name}`);//here we are converting string into backits called string interpolation
}
console.log(user.greeting2());

/*note-
casully we are accesing the object to (.),but when symbol are defined we have to used square braces if not symbols are treated
as strings and also js take key as string, and what if key defined as "name": insted of name: so in this case we can't access 
the object to (.), we have to use square braces.
