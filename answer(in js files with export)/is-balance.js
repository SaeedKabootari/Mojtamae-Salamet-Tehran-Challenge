  //FIRST ANSWER (need a suitable RegExp)!
    // function isBalance(input) {
    // let result = null;
    // input = String(input);
    // let pattern = new RegExp("\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)");
    // if(pattern.test(String(input))){
    //     result = 'is balance';
    //     console.log(result);
    // }else{
    //     result = 'is not balance';
    //     console.log(result);
    // }
    // return result
    // }
    

    //SECOND ANSWER
    export default function isBalance(input) {
        let result = null;
        let rightParenthesis = 0;
        let leftParenthesis = 0;
        let rightBracket = 0;
        let leftBracket = 0;
        let rightBrace = 0;
        let leftBrace = 0;
        let arrayInput = new Array();
        for(let i = 0 ; i < input.length ; i++){
            arrayInput.push(input.slice(i , i+1));
        }
        for(let i = 0; i < arrayInput.length; i++){
            if(arrayInput[i] === '('){
                rightParenthesis++;
            }
            if(arrayInput[i] === ')'){
                leftParenthesis++;
            }
            if(arrayInput[i] === '['){
                rightBracket++;
            }
            if(arrayInput[i] === ']'){
                leftBracket++;
            }
            if(arrayInput[i] === '{'){
                rightBrace++;
            }
            if(arrayInput[i] === '}'){
                leftBrace++;
            }
        }
        if(rightParenthesis == leftParenthesis && rightBracket == leftBracket && rightBrace == leftBrace){
            console.log('is balance');
            result = 'is balance';
        }else{
            console.log('is not balance'); 
            result = 'is not balance';
        }
        return result;
        }
    
        //examples
        let input = '(()))';
        isBalance(input);
        input = '((())){}';
        isBalance(input);
        input = '((())){}[';
        isBalance(input);
        input = '{((())){}[]}';
        isBalance(input);