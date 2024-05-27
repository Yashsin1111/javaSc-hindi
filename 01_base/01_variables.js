const employeeId=10266;
//variables:-
let employeeName="Yash";
var employeeAdd="ballia";
employeCentre="delhi";

// employeeId=1546;
// console.log(employeeId); const can be intialized once in jS, once its is intialised it can't be changed;

//udating variables
employeeName="anshu";
employeeAdd="thikmpur";
employeCentre="kolkata";

//here is some pre-defined function to display the data in the form of table,it can also help you to display many
//variables simaltaniously

console.table([employeeId,employeeName,employeeAdd,employeCentre]);
/*prefer:
not to use var insted of let , because in issue of block scope or functional scope
 */

/*defination(variables)-Variables are containers for storing information. Creating a variable in JavaScript is 
called "declaring" a variable: var carName; After the declaration, the variable is empty (it has no value).
once it can be intialized it can be changed */