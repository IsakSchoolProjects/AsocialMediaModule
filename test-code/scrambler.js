const letters = Array.from(Array(52)).map(
    (e,i) => {
        if ((i + 65) < 91) {
            return (i + 65);
        }
        else {
            return (i + 71);
        }
    });
const alphabet = letters.map((x) => String.fromCharCode(x))
const charCode = Array.from(Array(94)).map((e,i) => i + 33);
let Binairy = {}
for (char in charCode) {
    Binairy[String.fromCharCode(charCode[char])] = (charCode[char] >>> 0).toString(2);
}

class Scrambler {
    constructor(text,select=null,Log) {
        this.text = text;
        
        this.Selector(select,Log);
    }

    Selector(Selector,log) {
        let times = 6;
        let selector = Selector;
        if (selector !== null) {
            selector = Math.floor(parseInt(selector));
        }
        else {
            selector = randNum(times);
        }

        switch (selector) {
            case 0:
                if (log === true) {
                    console.log("Lowercase");
                }
                this.lowercase();
                break;
            case 1:
                if (log === true) {
                    console.log("RandomScramble");
                }
                this.randomScramble();
                break;
            case 2:
                if (log === true) {
                    console.log("PuncuationError");
                }
                this.punctuationError();
                break;
            case 3:
                if (log === true) {
                    console.log("ForgotCapsLock");
                }
                this.forgotCapsLock();
                break;
            case 4:
                if (log === true) {
                    console.log("AirHead");
                }
                this.airHead();
                break;
            case 5:
                if (log === true) {
                    console.log("DataError");
                }
                this.dataError();
                break;
            default:
                this.Selector(randNum(times),log)
                break;
        }
    }

    // Turns all letters to lowercase
    lowercase() {
        this.text = this.text.toLowerCase();
    }

    // Randomly changes certain letters to random ones
    randomScramble() {
        let textArray = this.text.split("");
        let currentPos = randNum(5);
        while (currentPos < textArray.length) {
            if (alphabet.includes(textArray[currentPos])) {
                textArray[currentPos] = alphabet[randNum(alphabet.length,true)];
                currentPos += randNum(textArray.length/10);
            }
            else {
                currentPos++;
            }
        }
        this.text = textArray.join("");
    }

    // Randomly inputs punctuation marks where there aren't any and randomly deletes those that are there already
    punctuationError() {
        let textArray = this.text.split("");
        for (let x = 0; x <= textArray.length;x++) {
            if (textArray[x] == ".") {
                if (randNum(1) === 1) {
                    textArray.splice(x,1);
                }
            }
            else {
                if (randNum(70) <= 1) {
                    textArray.splice(x,0,".");
                }
            }
        }
        this.text = textArray.join("");
    }

    // 
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
    
    // Randomly "forgets" the rest of the text after a certain point, which's bound by the length of the text
    airHead() {
        let textArray = this.text.split("");
        let temp = randNum(this.text.length);
        while (temp > Math.round(this.text.length * .75) || temp < Math.round(this.text.length * .25)) {
            temp = randNum(this.text.length);
        }
        textArray.splice(temp);
        this.text = textArray.join("");
    }

    // Rolls a random chance for each letter and increases it until it "activates", which's when it starts to convert all the remaining characters to binairy ASCII
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

// Creates a random number between 0 and max and if floor is true then it uses Math.floor(), Other wise it uses math.round()
function randNum(max,floor=null) {
    if (floor === true) {
        return Math.floor(Math.random() * max);
    }
    else {
        return Math.round(Math.random() * max + Number.EPSILON);
    }
}

let text = "Almost before we knew it, we had left the ground.";
let text2 = "So do not worry, saying, 'What shall we eat?' or 'What shall we drink?' or 'What shall we wear?' For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first His kingdom and His righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."

let scramble = new Scrambler(text2);
console.log(scramble.text);

