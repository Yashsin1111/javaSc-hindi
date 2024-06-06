//IIFE- Immideatly invoked function expression
/*Immediate Execution: IIFE functions are executed right away, ensuring that the code within them runs without the need for a
separate function call.
Encapsulation: IIFE creates a private scope for variables, preventing them from polluting the global scope and avoiding
conflicts with other parts of your code.
Anonymous or Named: You can define IIFE as an anonymous function (without a name) or a named function (with a name).
Anonymous IIFE is more common, but named IIFE can be helpful for debugging. */
/* syntax- ()(),
[(function defination)(function call)] */
(function chai(){
    console.log("TO-BE FINISHED")
})();//termination is need , because the IIFE do not know were the function is end , if termination is not allowed then 
// it return error.

(function aurcode(){
    console.log("To-be-discontineued");
})();

// we can also do this

( ()=>{
    console.log("get lost");
})();


( (Name)=>{
    console.log(`my name is ${Name}`);
})("hitesh")

