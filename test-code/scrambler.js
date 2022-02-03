const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];

const Binairy = {
    "A": "01000001",
    "B": "01000010",
    "C": "01000011",
    "D": "01000100",
    "E": "01000101",
    "F": "01000110",
    "G": "01000111",
    "H": "01001000",
    "I": "01001001",
    "J": "01001010",
    "K": "01001011",
    "L": "01001100",
    "M": "01001101",
    "N": "01001110",
    "O": "01001111",
    "P": "01010000",
    "Q": "01010001",
    "R": "01010010",
    "S": "01010010",
    "T": "01010010",
    "U": "01010101",
    "V": "01010110",
    "W": "01010111",
    "X": "01011000",
    "Y": "01011001",
    "Z": "01011010",
    "a": "01100001",
    "b": "01100010",
    "c": "01100011",
    "d": "01100100",
    "e": "01100101",
    "f": "01100110",
    "g": "01100111",
    "h": "01101000",
    "i": "01101001",
    "j": "01101010",
    "k": "01101011",
    "l": "01101100",
    "m": "01101101",
    "n": "01101110",
    "o": "01101111",
    "p": "01110000",
    "q": "01110001",
    "r": "01110010",
    "s": "01110011",
    "t": "01110100",
    "u": "01110101",
    "v": "01110110",
    "w": "01110111",
    "x": "01111000",
    "y": "01111001",
    "z": "01111010",
    " ": "00100000",
    ".": "00101110"
}

class Scrambler {
    constructor(text,select=null) {
        this.text = text;

        let selector = select;
        if (selector === null) {
            selector = randNum(5);
        }

        switch (selector) {
            case 0:
                this.lowercase();
                break;
            case 1:
                this.randomScramble();
                break;
            case 2:
                this.punctuationError();
                break;
            case 3:
                this.forgotCapsLock();
                break;
            case 4:
                this.airHead();
                break;
            case 5:
                this.dataError();
                break;
        }
    }

    // Randomly change certain x to others
    randomScramble() {
        let textArray = this.text.split("");
        let currentPos = randNum(5);
        while (currentPos < textArray.length) {
            textArray[currentPos] = letters[randNum(letters.length,true)];
            currentPos += randNum(textArray.length/10);
        }
        this.text = textArray.join("");
    }

    punctuationError() {
        let textArray = this.text.split("");
        for (let x = 0; x <= textArray.length;x++) {
            if (textArray[x] == ".") {
                if (randNum(1) === 1) {
                    textArray.splice(x,1);
                }
            }
            else {
                if (randNum(50) <= 1) {
                    textArray.splice(x,0,".");
                }
            }
        }
        this.text = textArray.join("");
    }

    forgotCapsLock() {
        let textArray = this.text.split("");
        for (let x = 0; x < textArray.length;x++) {
            if (textArray.includes(textArray[x].toLowerCase())) {
                if (textArray[x] == textArray[x].toLowerCase()) {
                    textArray[x] = textArray[x].toUpperCase();
                }
                else {
                    textArray[x] = textArray[x].toLowerCase();
                }
            }
        }
        this.text = textArray.join("");
    }

    lowercase() {
        this.text = this.text.toLowerCase();
    }
    
    airHead() {
        let textArray = this.text.split("");
        let temp = randNum(this.text.length);
        while (temp > Math.round(this.text.length * .75) || temp < Math.round(this.text.length * .25)) {
            temp = randNum(this.text.length);
        }
        textArray.splice(temp);
        this.text = textArray.join("");
    }

    dataError() {
        let textArray = this.text.split("");
        let chance = 0;
        let error = false;
        for (let x = 0; x < textArray.length;x++) {
            if (randNum(chance) >= 1) {
                error = true;
            }
            chance += 0.61/textArray.length;
            if (error === true) {
                if (Binairy.hasOwnProperty(textArray[x])) {
                    textArray[x] = Binairy[textArray[x]];
                }
                else {
                    textArray[x] = "00000000";
                }
            }
        }
        this.text = textArray.join("");
    }
}

function randNum(max,floor=null) {
    if (floor === true) {
        return Math.floor(Math.random() * (max+1));
    }
    else {
        return Math.round(Math.random() * max + Number.EPSILON);
    }
}

let text = "Almost before we knew it, we had left the ground.";
let text2 = "So do not worry, saying, 'What shall we eat?' or 'What shall we drink?' or 'What shall we wear?' For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first His kingdom and His righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."

let scramble = new Scrambler(text2,5);
console.log(scramble.text);

