//arrays

const arr1=[1,2,3,4,5];
console.log(arr1);//array is the type of object
console.log(typeof arr1);
const arr2=[0,1,2,3,"Mahadev","shree Ram"];//we can use multiple type of datatype in single array.
console.log(arr2);
//accessing array elements
console.log(arr2[4]);
//we can also declare the arrays in this way
const myarr=new Array(1,2,3,4,5);
console.log(myarr);
console.log(myarr[4]);
//we have some useful methods of arrays
myarr.push(6);
myarr.push(7);
console.log(myarr);
myarr.pop();
myarr.pop();
console.log(myarr);
myarr.unshift(9);//adds the element in starting index of the arrays.
console.log(myarr);
myarr.shift();//delete the starting element(index) of the arrays.
console.log(myarr);
console.log(myarr.includes(2));//return true or false  
console.log(myarr.indexOf(5));//return the index of element

const newArry=myarr.join();// its binds the array and convert into string

console.log(myarr);
console.log(typeof newArry);
console.log(newArry);

//splice and slice 
console.log("original array",myarr);

const myarray=myarr.slice(1,3); //changes are done in copy of the array
console.log("slice",myarr);
console.log(myarray);

// const myarray2=myarr.splice(2,0,45);
//change are done in orginal arrays and its its visible to the user,also add the elem.in arr
const myarray2=myarr.splice(1,3);
console.log("splice",myarr);
console.log(myarray2);
