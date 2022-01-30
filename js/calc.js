var numbers = document.querySelectorAll('.data-num');
var operator = document.querySelectorAll('[data-operator]');
var clearer = document.getElementById('data-clear');
var preResult = document.getElementById('preResult');
var result = document.getElementById('result')
var allClear = document.getElementById('clearAll');

calc = (e) => {
    console.log(e.target.innerHTML);
    preResult.innerHTML += e.target.innerHTML;
};

clear = () => {
    console.log('test');
    preResult.innerHTML = "";
};

clearLastDigit = () => {
    preResult.innerHTML = preResult.innerHTML.substring(0,preResult.innerHTML.length-1);
}

numbers.forEach(num => {
    num.addEventListener("click", calc);

});

allClear.onclick = clear;

clearer.onclick = clearLastDigit;
