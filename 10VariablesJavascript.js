    /* 
    Student: Michael Marquez          date: July 23 2024
    Per Scholas class: rtt31
    1. done - Create 10 variables
    2. done - Perform calculations(*operator) on vars and create new Vars
    3. done - Create 3 if Statements and test their outputs in console. 
    4. done - Use 2 Logical Operators
    5. done - Interpolate All 10 of your variables in a console log
    */

// 1. Number
let age = 18
let minAge = 10
let maxAge = 20

// age conditions
if (age >= minAge && age<= maxAge) {
    console.log(`${age} is between ${minAge} and ${maxAge} `);
}
else {
    console.log(`${age} is outside ${minAge} and ${maxAge}`);
}

/* 2. String 
  Internally, JavaScript strings are implemented as arrays of characters. Each character in a string is accessible via an index because JavaScript provides array-like indexing for strings.
*/
let name = "Kennedy";
firstLetter = name[0]
console.log(`name starts with ${firstLetter}`);

// 3. Boolean - using logical operators not (!)
let isStudent = true;
let isTeacher = false;
let isParent = true;

if ((isStudent || isTeacher && !isParent)) {
    if (isStudent) {
        console.log("Welcome student...")
    }
    if (isTeacher) {
        console.log("Greetings faculty...")
    }
    else if (isParent) {
        console.log("Hello parent...")
    }
} 

// 4. Array - use ! to test if included (includes). If not included or not existing then use push to add to array. 
let countries = ["USA", "CANADA"];

if (!countries.includes("JAPAN")) {
    countries.push("JAPAN"); // added at the end.
    console.log('JAPAN has been added')
    console.log(countries)
} 
/*
    Using array.find() with callback 
    syntax: array.find(callback(element[, index[, array]])[, thisArg])
    • callback: A function that tests each element. It takes three arguments:
		-element: The current element being processed in the array.
    	-index (optional): The index of the current element being processed.
		-array (optional): The array find() was called upon.
	• thisArg  (optional): Value to use as this when executing the callback.
*/
let carsArray = ["HONDA", "GM", "CHEVROLET","PONTIAC"]
carLocated = carsArray.find(carBrand => carBrand === "VOLVO")
if (carLocated) {
    console.log(`That car is ${carLocated}`) // print (carLocated)
}
else {
    carsArray.splice(2,0,"VOLVO") // insert this car VOLVO at index 2; 0 means do not delete anything.
}
console.log(`car listings are ${carsArray}`);


// 5. Object {key/value pair} - increment age=>target the age element inside Key/value pairs
let currentAge = 1;
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};

let personAge = 0
personAge += person.age  // increment age
console.log(`${person.firstName} age is ${personAge} years old`)

// 6. Null - test for null
let emptyValue = null;
if (emptyValue === null) {
    console.log(`Variable emptyValue is ${emptyValue}`) // print (Null)
}

// 7. Undefined - see how undefined is
let Undefined;
console.log('Undefined is non-printable')

// 8. Greeting - print to next line with escape.
let greet ="Hello, world!"
console.log(`Greetings\n ${greet}`)

// 9. Date increment month
let today = new Date()                      // get current date
let nextDay = new Date(today)               // assign to nextDay  
nextDay.setDate(today.getDay() + 1)          //  increase the Day by 1.
console.log(`Today is ${today.toLocaleDateString()} and 
          Tomorrow is ${nextDay.toLocaleDateString()}`)

// 10. Symbol 
let sym1 = Symbol("Name is Michael");
let sym2 = Symbol("Name is Michael");

console.log(sym1 === sym2); // Outputs: false (each symbol is unique)
//----------------------------------------------------------------
/// Symbol.for(key) creates a symbol with global key. if a symbol with that key exists, it returns the existing symbol.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
///

console.log(symbol("foo") === Symbol("foo")); // false

let globalSym = Symbol.for("global");
let anotherGlobalSym = Symbol.for("global");
console.log(globalSym === anotherGlobalSym); // Outputs: true

// Symbol.keyFor(symbol): Retrieves the key for a global symbol.
let sym = Symbol.for("global");
console.log(Symbol.keyFor(sym)); 