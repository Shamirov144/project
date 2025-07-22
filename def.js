const length = 6;
const height = 1;
const width = 3;
let result = '';

for (let i = 0; i < length; i++) {
    for (let k = 1; k < length - i; k++) {        
        result += ' ';
        // console.log(result);
    }
    for (let j = 1; j < (i + 1) *2; j++) {
        result += '*'
    }

    result += '\n';
}
for (let i = 0; i < height; i++) {
    for (j = 0; j < 4; j++) {
        result += ' ';
    }
    for (k = 0; k < width; k++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
