var displayNum = "";
var displayString = "";
var operation = 0;
var queuedOperation = 0;
var calculationFinished = false;
var decimalPoint = false;
var symbol = false;
var error = false;
var oneSymbol == false;

////////////////////////////////////////////////////////

function clearDisplay() {
  displayNum = "";
  displayString = "";
  operation = 0;
  queuedOperation = 0;
  document.getElementById("display").innerHTML = ""
  decimalPoint = false;
  symbol = false;
  error = false;
}

function numberInput(num) {

  if (error == false) {

    if (oneSymbol == false) {
      displayString += `${num}`
      document.getElementById("display").innerHTML = Number(displayString).toLocaleString();
      displayNum = Number(displayString)
      symbol = false;
      storedNum = Number(displayString)
    }
    else if (oneSymbol == true) {
      let anumber = ""
      anumber += `${num}`
      document.getElementById("display").innerHTML
    }
  }
}


function piInput() {
  if (error == false) {

    if (displayNum = null || displayNum == 0) {
      document.getElementById("display").innerHTML = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
    }
    else {
        document.getElementById("display").innerHTML = (Number(displayString) * 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679).toLocaleString();
    }
  }
}

function decimalInput(dec) {

  if (error == false) {

  if (decimalPoint == false) {
     displayString += '.';
     document.getElementById('display').innerHTML = Number(displayString).toLocaleString() + ".";
     decimalPoint = true;
}
  else {
    return;
  }

}
}
/////////////////////////////////////

function setOperation(command) {

////////////////////////////////////////////////////
if (error == false) {

if (command == 0) {
  return;
  }
else if (command == "add" || symbol == false) {
  document.getElementById('display').innerHTML += " + ";
  symbol == true
  oneSymbol == true
  }
else if (command == "subtract" || symbol == false) {
  document.getElementById('display').innerHTML = Number(displayString).toLocaleString() + " - ";
  symbol == true
  oneSymbol == true
  }
else if (command == "multiply" || symbol == false) {
  document.getElementById('display').innerHTML = Number(displayString).toLocaleString() + " * ";
  symbol == true
  oneSymbol == true
  }
else if (command == "divide" || symbol == false) {
  document.getElementById('display').innerHTML = Number(displayString).toLocaleString() + " / ";
  symbol == true
  oneSymbol == true
  }
else if (command == "power" || symbol == false) {
  document.getElementById('display').innerHTML = Number(displayString).toLocaleString() + " ^ ";
  symbol == true
  oneSymbol == true
  }

/////////////////////////////////////////////////////

}
}

///////////////////////////////////////////////////

function calculation() {
  if (error == false) {

  let finalCalculation = eval(displayString)
  if (finalCalculation == Infinity) {
    document.getElementById("display").innerHTML = "Error"
    error = true
  }
  else if (finalCalculation>=1000000000) {
    let exponent = finalCalculation.toString().length-1;
    document.getElementById('addition').innerHTML = finalCalculation / (10 ** (exponent)) + 'e' + exponent;

    }
    else {
      document.getElementById('addition').innerHTML = finalCalculation.toLocaleString();
  }

}

////////////////////////////////////////////////////



//////////////////////////////////////////////

if (operation != 0) {
  finsihedCalculation = true
}

/////////////////////////////////////////////

operation = 0;
queuedOperation = 0;
displayNum = "";
storedNum = "";

}

function signchange() {
  var display = document.getElementById("display")
  displayNum = display.value;
  var numDisplay = Number(displayNum);
  var numStored = Number(storedNum);

  displayNum = -1 * numDisplay
  display.value = displayNum

}

function percentage() {
  var display = document.getElementById("display")
  displayNum = display.value;
  var numDisplay = Number(displayNum);
  var numStored = Number(storedNum);

  displayNum = numDisplay / 100
  display.value = displayNum

}
