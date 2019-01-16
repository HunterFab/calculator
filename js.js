var displayNum = "";
var storedNum = "";
var operation = 0;
var queuedOperation = 0;
var calculationFinished = false;

////////////////////////////////////////////////////////

function checkNumber() {
  if (display.value < 1) {
    display.value = Math.round(display.value * 10000000) / 10000000
  }

}

function clearDisplay() {
  var display = document.getElementById("display");
  displayNum = "";
  storedNum = "";
  operation = 0;
  queuedOperation = 0;
  display.value = displayNum;
}

function numberInput(num) {
  var display = document.getElementById("display");
  display.value += num;

}

function piInput() {
  var display =document.getElementById("display");
  if (display.value == null || display.value == 0) {
    display.value = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
  }
  else {
      display.value *= 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
  }

}

function decimalInput(dec) {
  var display = document.getElementById("display");
  for (i = 0; i < display.value.length; i++)
    if (display.value.charAt(i) == '.') {
      return;
  }

/////////////////////////////////////

  display.value += dec;

}

/////////////////////////////////////

function setOperation(command) {
var display = document.getElementById("display"),
  displayNum = display.value;
  var nDisplay = Number(displayNum);
  var nStored = Number(storedNum);

////////////////////////////////////////////////////

if (queuedOperation == 0) {
  storedNum = display.value;
  }
else if (queuedOperation == 1) {
  storedNum = nStored + nDisplay;
  }
else if (queuedOperation == 2) {
  storedNum = nStored - nDisplay;
  }
else if (queuedOperation == 3) {
  storedNum = nStored * nDisplay;
  }
if (command == 'add') {
  operation = 1;
  }
else if (command == 'subtract') {
  operation = 2;
  }
else if (command == 'multiply') {
  operation = 3;
  }
else if (command == 'divide') {
  operation = 4;
}
else if (command == 'cos') {
  operation = 5;
}
else if (command == 'sin') {
  operation = 6;
}
else if (command == 'tan') {
  operation = 7
}
else if (command == 'power') {
  operation = 8
}


/////////////////////////////////////////////////////

  queuedOperation = operation;
  display.value = '';

}

///////////////////////////////////////////////////

function calculation() {
  var display = document.getElementById("display")
  displayNum = display.value;
  var numDisplay = Number(displayNum);
  var numStored = Number(storedNum);

////////////////////////////////////////////////////

if (operation == 1) {
  displayNum = (numStored + numDisplay);
}
else if (operation == 2) {
  displayNum = (numStored - numDisplay);
}
else if (operation == 3) {
  displayNum = (numStored * numDisplay);
}
else if (operation == 4) {
  displayNum = (numStored / numDisplay)
}
else if (operation == 5) {
  displayNum = (Math.cos(numDisplay))
}
else if (operation == 6) {
  displayNum = (Math.sin(numDisplay))
}
else if (operation == 7) {
  displayNum = (Math.tan(numDisplay))
}
else if (operation == 8) {
  displayNum = Math.pow(numStored, numDisplay)
}

  display.value = displayNum;

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
