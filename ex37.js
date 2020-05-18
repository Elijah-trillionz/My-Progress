// 37. Write a JavaScript program to create new string with 
// first 3 characters are in lower case from a given string. 
// If the string length is less than 3 convert all the characters in upper case.

function myStringProgram(theString) {
    const firstThreeChars = theString.slice(0, 3);
    if (theString.length >= 3) {
        console.log(firstThreeChars.toLowerCase());
    } else {
        console.log(firstThreeChars.toUpperCase());
    }
}

myStringProgram('Hello world');