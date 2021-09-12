//getting the data of the URL:
//
//https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object

var search = location.search.substring(1);
console.log(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value); }));

console.log(search);

// this object holds all data that user has input in the index.html page form

var allFormData = (JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value); }));
console.log(allFormData);

// all variables needed for calculations

// y = half of the width of back axis
// h = half of the width of front axis
// g = Distance between front and back axis
// alpha = angle of the front wheel that is spinning (which can be 0-90 degrees)
// x = distance between back wheel axis and the tip of the foot rest

// returns values in a form of string

// var y = (allFormData["width-back-axis"]) / 2
var y = (allFormData["width-back-axis"])
// var h = (allFormData["width-front-axis"]) / 2
var h = (allFormData["width-front-axis"])
var g = allFormData["between-front-and-back-axis"]
var alpha = allFormData["turn-degree-front"]
var x = allFormData["back-axis-to-footrest"]

y = parseFloat(y)
h = parseFloat(h)
g = parseFloat(g)
alpha = parseFloat(alpha)
x = parseFloat(x)

// formula to get total diameter
let TD = 2 * (Math.sqrt((y + h + ( g / (Math.tan(alpha)) ))**2  + x**2))
// formula to get 3 point turn size
// let ThreePTurn = (g / Math.tan(alpha)) + h;

// Half of the thickness of the back wheel
let halfWheelThickness = 3.81
// 6 inches, converted into cm for side padding
let comfortPadding = 18.288
// Finds minimum width of hallway
let minHallway = y + TD/2 + halfWheelThickness + comfortPadding;

// Outputs information: diameter of turn circle, radius, minimum width of hallway, minimum width door, and three point turn
document.getElementById("diameter").textContent = TD.toFixed(1) + " cm";
document.getElementById("radius").textContent = (TD/2).toFixed(1) + " cm";
document.getElementById("hallway").textContent = minHallway.toFixed(1) + " cm";
document.getElementById("doorway").textContent = (y*2 + halfWheelThickness*2 + comfortPadding).toFixed(1) + " cm";
// document.getElementById("ThreePointTurn").textContent = ThreePTurn.toFixed(1) + "cm";
