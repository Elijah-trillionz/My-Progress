// 40. Write a JavaScript program to check from two given integers 
// whether one of them is 8 or their sum or difference is 8.

function numberProgram(x, y) {
    const sum = x + y;
    const diff = x - y;
    switch (8) {
        case x: 
            return `${true} for x`;
        break;
        case y:
            return `${true} for y`;
        break;
        case sum:
            return `${true} for their sum`;
        break;
        case diff:
            return `${true} for their difference`;
        break;
        default:
            return `${true} for none`;
    }
}

console.log(numberProgram(2, 10))