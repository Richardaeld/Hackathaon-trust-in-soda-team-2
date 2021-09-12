//getting the data of the URL:
//
//https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object


var search = location.search.substring(1);

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

var y = (allFormData["width-back-axis"]) / 2;
// Development use
// var y = (allFormData["width-back-axis"]) 
var h = (allFormData["width-front-axis"]) / 2;
// Development use
// var h = (allFormData["width-front-axis"])
var g = allFormData["between-front-and-back-axis"];
var alpha = allFormData["turn-degree-front"];
var x = allFormData["back-axis-to-footrest"];

y = parseFloat(y);
h = parseFloat(h);
g = parseFloat(g);
alpha = parseFloat(alpha);
x = parseFloat(x);

// formula to get total diameter in Metric
let TD = 2 * (Math.sqrt((y + h + ( g / (Math.tan(alpha)) ))**2  + x**2));

// Half of the thickness of the back wheel in Metric
let halfWheelThickness = 3.81;
// 6 inches, converted into cm for side padding in Metric
let comfortPadding = 18.288;
// Finds minimum width of hallway in Metric
let minHallway = y + TD/2 + halfWheelThickness + comfortPadding;

// Convert to imperial
let meterToFeet = 3.281;
let TDUS = (TD / 100) * 3.281;

// Half of the thickness of the back wheel in Imperial
let halfWheelThicknessUS = (3.81 / 100) * meterToFeet;
// 6 inches, converted into cm for side padding in Imperial
let comfortPaddingUS = (18.288 / 100) * meterToFeet;
// Finds minimum width of hallway in Imperial
let minHallwayUS = (y / 100) * meterToFeet + TDUS/2 + halfWheelThicknessUS + comfortPaddingUS;
let minDoorFrame = (((y / 100) * meterToFeet ) * 2 + halfWheelThicknessUS * 2 + comfortPaddingUS);

// Outputs information: diameter of turn circle, radius, minimum width of hallway, and minimum width door as Metric
document.getElementById("diameter").textContent = TD.toFixed(1) + " cm";
document.getElementById("radius").textContent = (TD/2).toFixed(1) + " cm";
document.getElementById("hallway").textContent = minHallway.toFixed(1) + " cm";
document.getElementById("doorway").textContent = (y*2 + halfWheelThickness * 2 + comfortPadding).toFixed(1) + " cm";

// Outputs information: diameter of turn circle, radius, minimum width of hallway, and minimum width door as Imperial
document.getElementById("diameterUS").textContent = Math.floor(TDUS) + " ft " + (((TDUS.toFixed(1)) * 12) % 12 ).toFixed(1) + " in";
document.getElementById("radiusUS").textContent = Math.floor(TDUS/2) + " ft " + ((((TDUS/2).toFixed(1)) * 12 ) % 12 ).toFixed(1) + " in";
document.getElementById("hallwayUS").textContent = Math.floor(minHallwayUS) + " ft  " + (((minHallwayUS.toFixed(1)) * 12) % 12).toFixed(1) + " in";
document.getElementById("doorwayUS").textContent = Math.floor(minDoorFrame) + " ft " + (((minDoorFrame.toFixed(1)) * 12) % 12).toFixed(1) + " in";
