export default function encoder(input) {
    let result = null;
    let lastCharInput = input.charAt(input.length - 1);
    input = lastCharInput.concat(input.substr(0, input.length - 1));
    result = '';
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alphabet2 = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (input[i] === alphabet[j]) {
                result += String(alphabet2[j]);
            }
        }
    }
    console.log(result);
    return result
}

//example
let input = 'abz';
encoder(input);
input = 'wxyb';
encoder(input);