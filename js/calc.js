var numbers = document.querySelectorAll('.data-num');
var operators = document.querySelectorAll('.data-operator');
var clearer = document.getElementById('data-clear');
var preResult = document.getElementById('preResult');
var result = document.getElementById('result')
var allClear = document.getElementById('clearAll');
var equal = document.getElementById('data-equal');

calc = (e) => {
    preResult.innerHTML += e.target.innerHTML;
};

addOp = (e) => {
    preResult.innerHTML += e.target.innerHTML;
}

evaluate = () => {
    
    let firstNum = preResult.innerHTML.substring(0,1);
    if(firstNum === "*"|| firstNum === "/") {
        result.innerHTML = "Error!"
    }else {
        result.innerHTML = eval(preResult.innerHTML)
    }
    
};

fullClear = () => {
    preResult.innerHTML = "";
};

clearLastDigit = () => {
    preResult.innerHTML = preResult.innerHTML.substring(0,preResult.innerHTML.length-1);
}

numbers.forEach(num => {
    num.addEventListener("click", calc);
});

operators.forEach(op => {
    op.addEventListener("click", addOp);
});

allClear.onclick = fullClear;

clearer.onclick = clearLastDigit;

equal.onclick = evaluate;