// dates
let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

// let mycreatedate=new Date(2023,0,23);//in term of array month starts form 0-jan,or on two digit declaration like 01,its jan
// let mycreatedate=new Date(2023,0,23,5,6);
let mycreatedate=new Date("2023-01-25");//we can manupulate date or month form left to right
console.log(mycreatedate.toLocaleString());
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(mycreatedate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));//converting the time stamp into second,using floor we are rounding off.
