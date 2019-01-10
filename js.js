var displayNum = "";
var storedNum = "";
var operation = 0;
var queuedOperation = 0;
var calculationFinished = false;

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

function setOperation(command) {
var display = document.getElementById("display"),
  displayNum = display.value;
  var nDisplay = Number(displayNum);
  var nStored = Number(storedNum);

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
else if (command == 'divide')

  queuedOperation = operation;
  display.value = '';
}

function calculation() {
  var display = document.getElementById("display")
  displayNum = display.value;
  var numDisplay = Number(displayNum);
  var numStored = Number(storedNum);

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
