export default function removerRepetitive(string) {
    let result = null;
    let stringSet = new Set(string);
    let stringArray = Array.from(stringSet);
    result = '';
    for (let i = 0; i < stringArray.length; i++) {
        result += stringArray[i];
    }
    console.log(result);
    return result;
}

//examples
removerRepetitive('Helllllllllllllloooooo');
removerRepetitive('aaaaaaaaaBBBBBBccccccdd');