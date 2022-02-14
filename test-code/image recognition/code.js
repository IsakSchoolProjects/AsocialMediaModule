const Canvas = document.getElementById("canvas");
let context = Canvas.getContext('2d');

let clr = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + (Math.round(Math.random() * 100) / 100 + .2) + ")";
let fillClr = ["rgba(250,225,6,0.5)", "rgba(0,0,0,10)", clr];

function drawImage() {
    let image = new Image();
    image.src = "test-images/group.JPG";
    image.onload = function() {
        Canvas.width = 500;
        Canvas.height = (this.height/this.width)*Canvas.width;
        context.drawImage(image, 0, 0, Canvas.width, Canvas.height);
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
        ctx.fillStyle = fillClr[1];
        for (let i = 0; i < predictions.length; i++) {
            const start = predictions[i].topLeft;
            const end = predictions[i].bottomRight;
            const size = [end[0] - start[0], end[1] - start[1]];
            ctx.fillRect(start[0], start[1], size[0], size[1]);
        }
        // Canvas.style.display = "flex";
    } else {
        document.getElementById("status").innerText = "No Face(s) Found";
    }
}

drawImage();
findFaces();

// Jimp.read(Image.src).then();
