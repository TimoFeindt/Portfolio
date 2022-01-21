
var n1 = document.getElementById('c1');
var n2 = document.getElementById('c2');
var n3 = document.getElementById('c3');
var n4 = document.getElementById('c4');
var n5 = document.getElementById('c5');
var n6 = document.getElementById('c6');
var n7 = document.getElementById('c7');
var n8 = document.getElementById('c8');
var n9 = document.getElementById('c9');
var n0 = document.getElementById('c0');

var partRes = '';
var res = document.getElementById('result--box');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multi = document.getElementById('multi');
var divi = document.getElementById('divi');
var equal = document.getElementById('equal');



n1.onclick = () => {
    partRes += '1';
    res.innerHTML = partRes;
    console.log(partRes)
}
n2.onclick = () => {
    partRes += '2';
    res.innerHTML = partRes;
    console.log(partRes)
}
n3.onclick = () => {

    partRes += '3';
    res.innerHTML = partRes;
}
n4.onclick = () => {
    partRes += '4';
    res.innerHTML = partRes;
}
n5.onclick = () => {
    partRes += '5';
    res.innerHTML = partRes;
}
n6.onclick = () => {
    partRes += '6';
    res.innerHTML = partRes;
}
n7.onclick = () => {
    partRes += '7';
    res.innerHTML = partRes;
}
n8.onclick = () => {
    partRes += '8';
    res.innerHTML = partRes;
}
n9.onclick = () => {
    partRes += '9';
    res.innerHTML = partRes;
}
n0.onclick = () => {
    partRes += '0';
    res.innerHTML = partRes;
}
plus.onclick = () => {
    partRes += '+';
    res.innerHTML = partRes;
}
minus.onclick = () => {
    partRes += '-';
    res.innerHTML = partRes;
}
multi.onclick = () => {
    partRes += '*';
    res.innerHTML = partRes;
}
divi.onclick = () => {
    partRes += '/';
    res.innerHTML = partRes;
}
equal.onclick = () => {
    res.innerHTML = parseInt(partRes);
    console.log(parseInt(partRes))
}

