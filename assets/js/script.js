let imgs = document.querySelectorAll('.imgzoom');

console.log(imgs);
function imgsZoom(img) {
    console.log("imgsZoom() chamado");
    img.style.width = '800px';
    img.style.height = '600px';
}

console.log(imgs);
function imgNormal(img) {
    console.log("imgNormal() chamado");
    img.style.width = '400px';
    img.style.height = '400px';
}
