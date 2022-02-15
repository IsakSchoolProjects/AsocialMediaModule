const Canvas = document.getElementById("canvas");
const context = Canvas.getContext('2d');

// let clr = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + (Math.round(Math.random() * 100) / 100 + .3) + ")";
// let fillClr = ["rgba(250,225,6,0.5)", "rgba(0,0,0,10)", clr];
let width = 500;

function drawImage() {
    let image = new Image();
    image.src = "test-images/group.JPG";
    image.onload = function() {
        Canvas.height = (this.height/this.width)*width;
        Canvas.width = width;
        context.drawImage(image, 0, 0, Canvas.width, Canvas.height);
        Selector();
    }
}

async function findFaces() {
    const model = await blazeface.load();
    const predictions = await model.estimateFaces(Canvas, false);
    if (predictions.length > 0) {
        console.log(predictions);
        document.getElementById("status").innerText = "Face(s) found!";
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        for (let i = 0; i < predictions.length; i++) {
            ctx.fillStyle = "rgba(0,0,0,10)";
            const start = predictions[i].topLeft;
            const end = predictions[i].bottomRight;
            const size = [end[0] - start[0], end[1] - start[1]];
            ctx.fillRect(start[0], start[1], size[0], size[1]);
        }
    } else {
        document.getElementById("status").innerText = "No Face(s) Found";
    }
}

function Selector() {
    switch (Math.round(Math.random()*.7)) {
        case 0:
            console.log("Case 0");
            findFaces();
            break;
    
        case 1:
            console.log("Case 1");
            context.fillStyle = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",1)";
            context.fillRect(0, 0, Canvas.width, Canvas.height);
            break;
    
        default:
            break;
    }
}

drawImage();

// let temp = [0,0];

// for (let x = 0; x < 100; x++) {
//     let rand = Math.round(Math.random()*.69);
//     if (rand == 0) {
//         temp[0]++;
//     }
//     else {
//         temp[1]++;
//     }
// }

// console.log(temp)
// console.log("ocurance = ",temp[1]/temp[0]*100,"%");