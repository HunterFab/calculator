displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
finishedCalculation = false;

function clearDisplay() {
displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
finishedCalculation = false;
display.value = displayNum
}

function numberInput(num) {
display.value += num;
}

function setOperation(funct) {
var display = document.getElementById("display"),
displayNum = display.value
  evalDisplay = eval(displayNum);
  evalStored = eval(storedNum);

if (queuedOperation = 0) {
  storedNum = displayNum
}
else if (queuedOperation = 1) {
  storedNum = evalStored + evalDisplay
}
else if (queuedOperation = 2) {
  storedNum = evalStored - evalDisplay
}
else if (queuedOperation = 3) {
  storedNum = evalStored * evalDisplay
}
else if (queuedOperation = 4) {
  storedNum = evalStored / evalDisplay
}

//////////////////////////////////////

if (funct=="add") {
  operation = 1
}
else if (funct=="subtract") {
  operation = 2
}
else if (funct=="multiply") {
  operation = 3
}
else if (funct=="divide") {
  operation = 4
}

queuedOperation = operation
displayNum = " "
display.value = displayNum
}

function calculation() {
  var display = document.getElementById("display")
  displayNum = display.value
    evalDisplay = eval(displayNum);
    evalStored = eval(storedNum);

if (operation = 1) {
  storedNum = evalStored + evalDisplay
}
else if (operation = 2) {
  storedNum = evalStored - evalDisplay
}
else if (operation = 3) {
  storedNum = evalStored * evalDisplay
}
else if (operation = 4) {
  storedNum = evalStored / evalDisplay
}

eval(storedNum) = storedNum
display.value = storedNum

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
