/*these are all comparison operators ,
console.log(1>2);
console.log(4>2);
console.log(1==2);
console.log(1!=2);
console.log(5>=2);
*/

console.log("4"> 2);
console.log("04"> 2);
//this is above compasion the javascript automatically convert the string to number , but while doing comparison we must assure 
// the datatye of both the variables are same,alternative datatypes dose't give the predicttic results

console.log(null> 0);
console.log(null==0);
console.log(null>=0);
//javascripts have a differnt way to invoke comparsion operator and equality operator
// in(1) js take null as empty so it returns false
// in(2) js take null as empty value so it return false
// in(3) js converts null as 0 or grater than 0 so its return true , here the problems of conversion arrises,its can also convert
//into NaN.

console.log(undefined > 0); // same case it return false
console.log("2"===2);//===,known as strictly check ,its check both the datatypes of the variables and if match then its start 
//comparing but if datatypes are not same it return false.


/*important 
we must avoid these type of conversion  */