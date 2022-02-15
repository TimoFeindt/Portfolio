
let index = 0;
let imgArray = Array.from(document.querySelectorAll('.imageSmall'));
let rightBtn = document.getElementById('right');
let leftBtn = document.getElementById('left');
let activeImage = document.getElementById('image--active') 

const nextImage = () => {
    if(index == (imgArray.length - 1)) {
        index = 0;
        activeImage.innerHTML = imgArray[0].outerHTML;
    } else if(index < imgArray.length) {
        index += 1
        activeImage.innerHTML = imgArray[index].outerHTML;
    }
}
const prevImage = () => {
    if(index == 0) {
        index = (imgArray.length - 1);
        activeImage.innerHTML = imgArray[index].outerHTML;
    }else if(index <= imgArray.length){
        index += -1
        activeImage.innerHTML = imgArray[index].outerHTML;
    }

}


rightBtn.onclick = nextImage;
leftBtn.onclick = prevImage; 