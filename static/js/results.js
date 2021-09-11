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

var y = (allFormData["width-back-axis"]) / 2
var h = (allFormData["width-front-axis"]) / 2
var g = allFormData["between-front-and-back-axis"]
var alpha = allFormData["turn-degree-front"]
var x = allFormData["back-axis-to-footrest"]

// console log - can be removed when you finished

console.log(`y - width-back-axis = ${y}`)
console.log(`h - width-front-axis = ${h}`)
console.log(`g - distance between front and back axis = ${g}`)
console.log(`alpha - angle of the front wheel that is spinning ${alpha}`)
console.log(`x - distance between back wheel axis and the tip of the foot rest ${x}`)

