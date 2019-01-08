displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
calculationFinished = false;

function clearDisplay() {
  var display = document.getElementById("display");
  displayNum = "";
  storedNum = "";
  operation = 0;
  queuedOperation = 0;
  display.value = displayNum;

function numberInput(num) {
  var display = document.getElementById("display");
  display.value += num;
}


function setOperation(command) {
var display = document.getElementById("display"),
  displayNum = display.value;

  evalDisplay = eval(displayNum),
  evalStored = eval(storedNum);

if (queuedOperation == 0) {
  storedNum = display.value;
  }
else if (queuedOperation == 1) {
  storedNum = evalStored + evalDisplay;
  }
else if (queuedOperation == 2) {
  storedNum = evalStored - evalDisplay;
  }
else if (queuedOperation == 3) {
  storedNum = evalStored * evalDisplay;
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
else if (command == 'divide')

  queuedOperation = operation;
  display.value = '';
}

function calculation() {

  displayNum = display.value;
  numDisplay = Number(displayNum),
  numStored = Number(storedNum);

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
