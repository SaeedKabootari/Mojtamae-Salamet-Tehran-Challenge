export default function getRepeatedInfo(number) {
    let result = null;
    let n1 = '', n2 = '', n3 = '', n4 = '', n5 = '', n6 = '', n7 = '', n8 = '', n9 = '';
    input = String(input);
    let arrayInput = new Array();
    for (let i = 0; i < input.length; i++) {
        arrayInput.push(input.slice(i, i + 1));
    }
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i] === '1') {
            n1 += '1';
        }
        if (arrayInput[i] === '2') {
            n2 += '22';
        }
        if (arrayInput[i] === '3') {
            n3 += '333';
        }
        if (arrayInput[i] === '4') {
            n4 += '4444';
        }
        if (arrayInput[i] === '5') {
            n5 += '55555';
        }
        if (arrayInput[i] === '6') {
            n6 += '666666';
        }
        if (arrayInput[i] === '7') {
            n7 += '7777777';
        }
        if (arrayInput[i] === '8') {
            n8 += '88888888';
        }
        if (arrayInput[i] === '9') {
            n9 += '999999999';
        }
    }
    result = `result = {1: ${n1} , 2: ${n2}, 3: ${n3}, 4: ${n4}, 5: ${n5}, 6: ${n6}, 7: ${n7}, 8: ${n8}, 9: ${n9}}`;
    console.log(result);
    return result;
}

//examples
let input = 1255;
getRepeatedInfo(input);
input = 12553;
getRepeatedInfo(input);