let letters = Array.from(Array(52)).map(
    (e, i) => {
        if ((i + 65) < 91) {
            return (i + 65);
        }
        else {
            return (i + 71);
        }
    });
const alphabet = letters.map((x) => String.fromCharCode(x))
const charCode = Array.from(Array(94)).map((i) => i + 33);
let Binairy = {}
for (char in charCode) {
    Binairy[String.fromCharCode(charCode[char])] = (charCode[char] >>> 0).toString(2);
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
            textArray[currentPos] = alphabet[randNum(alphabet.length,true)];
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

let scramble = new Scrambler(text2);
console.log(scramble.text);

