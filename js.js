var float = 0;
var store = 0;
var display = 0;
function nine() {
  float = (float * 10) + 9
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function eight() {
  float = (float * 10) + 8
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function seven() {
  float = (float * 10) + 7
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function six() {
  float = (float * 10) + 6
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function five() {
  float = (float * 10) + 5
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function four() {
  float = (float * 10) + 4
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function three() {
  float = (float * 10) + 3
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function two() {
  float = (float * 10) + 2
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function one() {
  float = (float * 10) + 1
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function zero() {
  float = (float * 10) + 0
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function equal() {
  store = float
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
function display() {
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = "32px Courier New"
  context.strokeText(`${float}`, 10, 50)
}
