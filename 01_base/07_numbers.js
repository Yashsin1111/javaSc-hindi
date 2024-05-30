const score=450;
//here js automaticaly dectect the type of score is number
// now we can define it expisuitly
console.log(score);
const balance=new Number(2002.95);
console.log(balance);

//we have some methods for numbers
console.log(balance.toString());//return number as string
console.log(balance.toString.length)//return the lenght of number which is converted into string
console.log(balance.toFixed(4));//Returns a number written with a number of decimals

const newNumber=514.4455;
console.log(newNumber.toPrecision(3))//return a string mainly use to do round off , of the mathmatical numbers

const anather=1000000;
console.log(anather.toLocaleString('en-IN'));// use to add commas , en-IN for indian number system

// +++++++++++++++++++++ Maths method +++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-3));//takes absolute value changes -ive to +ive not vise-versa
// console.log(Math.round(4.599));//rounding off
// console.log(Math.ceil(4.7));//take top value after decimal always
// console.log(Math.floor(4.1));//takes botom value after decimal always
// console.log(Math.min(4,3,8,6));//take min value
// console.log(Math.max(4,9,4,5));//take max value


console.log(Math.random());
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);

//eg 
const min=10 
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);