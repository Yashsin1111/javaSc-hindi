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