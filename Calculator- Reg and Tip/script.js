
//Calculator
function tipCalculator() {
    var amount = document.getElementById('tipAmount').value;
    var tipPercent = document.getElementById('tipPercent').value;
    var split = document.getElementById('tipSplit').value;
    tipPercentA = () => tipPercent * .01;
    tipTotal = () => tipPercentA() * amount;
    totalTotal = () => tipTotal() + parseFloat(amount);
    tipPP = () => tipTotal() / split;
    totalPP = () => totalTotal() / split;
    document.getElementById('tipTotal').innerHTML = ( 'Tip: ' + '$' + tipTotal().toFixed(2) );
    document.getElementById('totalTotal').innerHTML = ( 'Total: ' + '$' + totalTotal().toFixed(2) );
    document.getElementById('tipPP').innerHTML = ( 'Tip: ' + '$' + tipPP().toFixed(2) );
    document.getElementById('totalPP').innerHTML = ( 'Total: ' + '$' + totalPP().toFixed(2) );
}


const calLG = document.getElementsByClassName('calculatorLG');
const calCover = document.getElementById('calCover');
const cal = document.getElementById('calculator');
const calTip = document.getElementById('tip');
const calScreen = document.getElementById('calScreen');



function originalCalculator() {
    cal.style.display = "block";
    calTip.style.display = "none";
}

function tip() {
    calScreen.innerHTML = "";
    calTip.style.display = "block";
    cal.style.display = "none";
    calTip.style.animation = "calGrow 1s forwards";
    calTip.style.position = "relative";
    calTip.style.zIndex = "10000";
}

function calculate(Number) {
     var value = calScreen.innerHTML;

    if (value == '') {
        calScreen.innerHTML = Number;
    }
    else {
        calScreen.innerHTML = value + Number;
    }
}

function equalButton() {
    value = calScreen.innerHTML;
    calScreen.innerHTML = (eval(value));
}

function clearCalculator() {
    calScreen.innerHTML = "";
}

