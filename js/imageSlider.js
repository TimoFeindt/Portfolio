
let index = 0;
let imgArray = Array.from(document.querySelectorAll('.imageSmall'));
let rightBtn = document.getElementById('right');
let leftBtn = document.getElementById('left');

console.log(imgArray[2])
const nextImage = () => {
    let activeImage = document.getElementById('#active') 
    if(index == (imgArray.length - 1)) {
        index = 0;
        activeImage.innerHTML = imgArray[0].outerHTML;
        console.log(index)
    } else if(index < imgArray.length) {
        index += 1
        activeImage.innerHTML = imgArray[index].outerHTML;
        console.log(index)
    }
}
const prevImage = () => {
    let activeImage = document.getElementById('#active') 
    if(index == 0) {
        index = (imgArray.length - 1);
        activeImage.innerHTML = imgArray[index].outerHTML;
        console.log(index)
    }else if(index <= imgArray.length){
        index += -1
        activeImage.innerHTML = imgArray[index].outerHTML;
        console.log(index)
    }

}


rightBtn.onclick = nextImage;
leftBtn.onclick = prevImage; 