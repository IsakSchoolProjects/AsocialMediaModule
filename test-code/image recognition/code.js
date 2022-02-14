const Image = document.getElementById("image");
const Canvas = document.getElementById("canvas");

let clr = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + (Math.round(Math.random() * 100) / 100 + .2) + ")";
let fillClr = ["rgba(250,225,6,0.5)", "rgba(0,0,0,10)", clr];

function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
}

function dataURLtoFile(dataUrl, fileName) {
    var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
}

async function findFaces() {
    const model = await blazeface.load();
    const img = document.querySelector("img");
    const predictions = await model.estimateFaces(img, false);
    if (predictions.length > 0) {
        console.log(predictions);
        document.getElementById("status").innerText = "Face(s) found!";
        const canvas = document.getElementById("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = fillClr[1];
        for (let i = 0; i < predictions.length; i++) {
            const start = predictions[i].topLeft;
            const end = predictions[i].bottomRight;
            const size = [end[0] - start[0], end[1] - start[1]];
            ctx.fillRect(start[0], start[1], size[0], size[1]);
        }
        let newImage = Canvas.toDataURL("image/png");
        let fileReader = new FileReader();
        mergeImages([Image.src, dataURLtoFile(newImage, "name")]).then(b64 => download(b64, "test"));
    } else {
        document.getElementById("status").innerText = "No Face(s) Found";
    }
}

findFaces();



// Jimp.read(Image.src).then();
