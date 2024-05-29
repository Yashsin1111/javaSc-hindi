let Name="yash";
let repositoryCount=2;

console.log(Name + repositoryCount + " value");//this is not the moder way to display it,although we can use it but,

console.log(`hellow my name is ${Name} and my repository count is ${repositoryCount}`);// this is the morder way to display

const gamename= new String(`yashsingh`);//return string:`yashsingh`,because the data is string ,it can also be numebr,boolen etc.
console.log(gamename);//type of object
console.log(gamename[0]);
console.log(gamename[5]);
console.log(gamename[4]);
//some method for string
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(`5`));
console.log(gamename.indexOf('s'));
console.log(gamename.slice(0,4));//negative values are taken as 0

const Newstring="    hitesh     ";
console.log(Newstring);
console.log(Newstring.trim());//use to remove usual spaces in string , used in to create password etc,,
//time having 2 method trim start and trim end.

const url="https://orange-succotash-976rjwwr69ppcg6j.github.dev/"
console.log(url.replace(`976`,`456`));
console.log(url.includes(`orange`));


// converting string into Array we have a method
const newone="my name is yash kumar singh";
console.log(newone.split(' '));
