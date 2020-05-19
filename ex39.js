// 39. Write a JavaScript program to compute the sum of the two given integers, 
// If the sum is in the range 50..80 return 65 other wise return 80. 

function numberProgram(x, y) {
    const sum = x + y;
    if (sum >= 50 && sum <= 80) return 65;
    else return 80;
}

console.log(numberProgram(10, 60)); // returns 65;