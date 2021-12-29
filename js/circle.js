
var skillHtmlValue = document.getElementById("html").querySelector(".skill--value");
var skillCssValue = document.getElementById("css").querySelector(".skill--value");
var skillJsValue = document.getElementById("js").querySelector(".skill--value");
var skillReactValue = document.getElementById("react").querySelector(".skill--value");
var skillPhpValue = document.getElementById("php").querySelector(".skill--value");
var skillSqlValue = document.getElementById("sql").querySelector(".skill--value");
var skillPsValue = document.getElementById("ps").querySelector(".skill--value");
var skillIndValue = document.getElementById("ind").querySelector(".skill--value");
var skillAiValue = document.getElementById("ai").querySelector(".skill--value");
var skillFigmaValue = document.getElementById("figma").querySelector(".skill--value");

var C20 = 0;
var C30 = 0;
var C40 = 0;
var C50 = 0;
var C60 = 0;
var C70 = 0;
var C80 = 0;
var C90 = 0;
var C100 = 0;

// Loading for 80 percent
setInterval(()=> {
    if( C80 == 80 ) {
        clearInterval();
    }else {
        C80 += 1;
        skillHtmlValue.innerHTML= C80 + "%";
        skillCssValue.innerHTML= C80 + "%";
    }
},25)

// Loading for 70 percent
setInterval(()=> {
    if( C70 == 70 ) {
        clearInterval();
    }else {
        C70 += 1;
        skillPsValue.innerHTML= C70 + "%";
    }
},28)

// Loading for 60 percent

setInterval(()=> {
    if( C60 == 60) {
        clearInterval();
    }else {
        C60 += 1;
        skillIndValue.innerHTML= C60 + "%";
    }
},30)

// Loading for 50 percent

setInterval(()=> {
    if( C50 == 50) {
        clearInterval();
    }else {
        C50 += 1;
        skillFigmaValue.innerHTML= C50 + "%";
        skillJsValue.innerHTML= C50 + "%";
    }
},40)

// Loading for 40 percent

setInterval(()=> {
    if( C40 == 40) {
        clearInterval();
    }else {
        C40 += 1;
        skillReactValue.innerHTML= C40 + "%";
        skillAiValue.innerHTML= C40 + "%";
        skillSqlValue.innerHTML= C40 + "%";
    }
},48)

// Loading for 40 percent

setInterval(()=> {
    if( C20 == 20) {
        clearInterval();
    }else {
        C20 += 1;
        skillPhpValue.innerHTML= C20 + "%";
    }
},95)
