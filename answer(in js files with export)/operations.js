export default function operations(ops) {
    let result = null
    result = 0;
    let splitedOps = ops.split(' ');
    let answerArray = new Array();
    for (let i = 0; i < splitedOps.length; i++) {
        if (splitedOps[i].includes('0') ||
            splitedOps[i].includes('1') ||
            splitedOps[i].includes('2') ||
            splitedOps[i].includes('3') ||
            splitedOps[i].includes('4') ||
            splitedOps[i].includes('5') ||
            splitedOps[i].includes('6') ||
            splitedOps[i].includes('7') ||
            splitedOps[i].includes('8') ||
            splitedOps[i].includes('9')) {
            answerArray.push(splitedOps[i]);
        }
        else if (splitedOps[i] === 'D') {
            answerArray.push((answerArray[answerArray.length - 1]) * 2);
        }
        else if (splitedOps[i] === 'R') {
            answerArray.pop();
        }
        else if (splitedOps[i] === '+') {
            answerArray.push(Number(answerArray[answerArray.length - 1]) + Number(answerArray[answerArray.length - 2]));
        }
    }
    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i] = Number(answerArray[i]);
    }
    for (let i = 0; i < answerArray.length; i++) {
        result += answerArray[i];
    }
    console.log(result);
    return result;
}

//examples
let ops = "-2 5 D + R"
operations(ops);