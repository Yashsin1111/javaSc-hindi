const M_heros=["thor","ironman","spiderman"];
const Dc_heross=["superman","flash","batmen"];
M_heros.push(Dc_heross);//include arrays in arrays,hence its complex to display the elements of included arrays
console.log(M_heros);
console.log(M_heros[3][0]);
//concate works differntly,when we re-assin an new arrays both the elementof arrays are mergy nicely in new array,if new arrays
//not declere then its works like push method as we seen before.
const all_heros = M_heros.concat(Dc_heross);
console.log(all_heros);
//also use to merge elemets in an arrays ,known as spred method
const all_heros_new = [...M_heros,...Dc_heross];
console.log(all_heros_new);
//spread and concate method output are not perfectly vissible in github,go-to your browser and follow the syntax

const anatherarray=[1,2,3,[4,5,6],7,8,[9,3,[2,5,7],6],8,9];
const anatherarray_new=anatherarray.flat(Infinity);//Returns a new array with all sub-array elements concatenated into it 
//recursively up to the specified depth.
console.log(anatherarray_new);

console.log(Array.isArray("hitesh"));//return false
console.log(Array.from("yash"));// return an array
console.log(Array.from({name: "hitsh"}));//we have to declare the key and value to convet in the arrays ,if not declared 
//then its automaticaally return empty[],we will study later

let score=100;
let score2=200;
let score3=300;
console.log(Array.of(score,score2,score3));
