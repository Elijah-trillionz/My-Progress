//35. Write a program to check whether a specified 
// character exists within the 2nd to 4th position in a given string.

// make an unkown string and unkown special char using function

function myStringProgram(theString, specifiedCharacter) {
    // Slice out the required positions
    const after = theString.slice(2, 4);
    //compare the positions with your specified character
    if (specifiedCharacter.match(after.charAt(0)) || specifiedCharacter.match(after.charAt(1))) {
        console.log(true);
    } else {
        console.log(false)
    }
}

myStringProgram('Hello World', 'l')