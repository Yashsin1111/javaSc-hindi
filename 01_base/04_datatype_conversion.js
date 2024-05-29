let score="33abc";

// const {score}=req.body; here in this line there is no confermation that, score is a number,string,boolean etc;

console.log(typeof score);
console.log(typeof (score));
//as we can see the type of the score is number,now lets decalre score="33",now the output is string

// lets start converting the datatypes from string to number
let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* "33"=>33
"33abc"=>NaN(not a number)
""=>0;
true=1,false=0;
*/ 

//number to boolean

let islogged="yash";
let boolisok=Boolean(islogged);

console.log(typeof (boolisok));
console.log(boolisok);

/* 1=>true  0=>false
""=>false;
"yash"=>true;
*/

//conversion of number to string

let somenumber=98;

let thisnumber=String(somenumber);
console.log(typeof thisnumber);
console.log(thisnumber);


/* operation on javascript */

let value=10;
let negativevalue= -value;
// console.log(negativevalue);
//as like many operation we have 
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(5/2);
console.log(4%2);

//lets add string 
let str1="yash";
let str2=" singh";
console.log(str1+str2);//we can do only addition operation in string;

console.log("1"+2);//string and number both concluded together
console.log(1+"2");//number and string ...
console.log("1"+"2"+3);//string , string and number concluded together
console.log(1+2+"3");/*but in this case number,number and string ..
comes together the number add automatacally and string part conclude automatically*/


/*general purpose 
console.log(true),return true
console.log(+true),return 1
console.log(true+),return error

let num1,num2,num3
num1=num2=num3=2+3; not a profesional way to declare it
*/

let gamecount=1002;
gamecount++;//as we know there is pre-fix and postfix operation on javascript;
console.log(gamecount);
