// move rocket with scroll
const rocket = document.getElementById("rocket").querySelector(".fa-shuttle-space");
let startPosition = -16;

// add activeBorder to Event if rocket position is equal
var containerOne = document.getElementById('one');
var containerTwo = document.getElementById('two');
var containerThree = document.getElementById('three');
var containerFour = document.getElementById('four');
var containerFive = document.getElementById('five');
var containerSix = document.getElementById('six');
var containerSeven = document.getElementById('seven');
var containerEight = document.getElementById('eight');

var extentOne = containerOne.querySelector('event--box--content')
var d = document.createElement("div")

window.addEventListener("scroll" , ()=> {
    let scrolled = window.scrollY;

    if(rocket.offsetTop < 2330) {
        rocket.style.top = (startPosition+ scrolled) + 'px';
    } else {
        rocket.style.top = 2330 + 'px';
    }
    if(rocket.offsetTop >= (containerEight.offsetTop+ 21)) {
        containerEight.classList.add('active');
    }else if(rocket.offsetTop >= (containerSeven.offsetTop+ 21)) {
        containerSeven.classList.add('active');
    }else if(rocket.offsetTop >= (containerSix.offsetTop+ 21)) {
        containerSix.classList.add('active');
    }else if(rocket.offsetTop >= (containerFive.offsetTop+ 21)) {
        containerFive.classList.add('active');
    }else if(rocket.offsetTop >= (containerFour.offsetTop+ 21)) {
        containerFour.classList.add('active');
    }else if(rocket.offsetTop >= (containerThree.offsetTop+ 21)) {
        containerThree.classList.add('active');
    }else if(rocket.offsetTop >= (containerTwo.offsetTop+ 21)) {
        containerTwo.classList.add('active');
    }else if(rocket.offsetTop >= (containerOne.offsetTop+ 21)) {
        containerOne.classList.add('active');
    }
})


