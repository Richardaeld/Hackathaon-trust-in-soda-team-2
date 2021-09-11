//--------------------------- method 1 -------------------------------
// ----For calculating turning radius without acceleration  of a vehicle that only the front wheels turn
//---- Issue*** this spits out negative numbers occasionally

// Formula
// Radius = b/sin(tau) + (a-c)/2

// Variables
// a = width between front two wheels
// b = width between front and back wheels
// c = width between back two wheels
// tau = angle of wheel (estimated between 30 and 45 deg)

// Calculates when submit button is clicked
// Chould change, "click" to "change" to allow auto updates for when numbers are being input
// Or double up on events to allow for both events to trigger outputs





document.getElementById("submit-button").addEventListener("click", function() {
    let b = document.getElementById("wheel_width_FB").value;
    let a = document.getElementById("wheel_width_FF").value;
    let c = document.getElementById("wheel_width_BB").value;
    let tau = document.getElementById("wheel-angle").value;

    let solution = 0;

    //formula
    solution = (b / Math.sin(tau)) + ((a - c) / 2)

    // Method 1 -  used for consolelog testing
    // console.log(.760 / Math.sin(45) + (.460 - .637) / 2)
    //  method 2 - used for consolelog testing
    // console.log(.460/Math.sin(45))

    //convert to feet
    //1 meter = 3.28084 ft
    convertMeter = 3.28084

    // Gives feet and inch output
    document.getElementsByClassName("output1")[0].textContent = Math.floor(solution * convertMeter)  + "ft " + Math.floor(solution * convertMeter) % 12 + "in"

    // gives raw meter output -- used to check if toFixed would play nice -- shouldnt be useful post development
    document.getElementsByClassName("output2")[0].textContent = solution

    // Gives meter output with 3 decimal
    document.getElementsByClassName("output3")[0].textContent = solution.toFixed(3) + "M"


    // Looking for an average of 30 inches for wheelchairs
    // Looking for an average of 47 inches for electric wheelchairs

});



//-------------------------- Method 3 --------------------------
// Calculate turn diameter
// TD = 2 * (Math.sqrt((y + h + ( g / tan(alpha)))**2  + x**2))
// y = center to center back wheel
// h = center to center front wheel
// g = distance between front and back center of wheels
// alpha = angle of front wheel turn
// x = distance between front most part and back wheels(fixed wheels)
var TD = 0;
document.getElementById("submit-button1").addEventListener("click", function() {

    y = document.getElementById("y").value;
    h = document.getElementById("h").value;
    g = document.getElementById("g").value;
    alpha = document.getElementById("alpha").value;
    x = document.getElementById("x").value;

    y = parseFloat(y)
    h = parseFloat(h)
    g = parseFloat(g)
    alpha = parseFloat(alpha)
    x = parseFloat(x)


    TD = 2 * (Math.sqrt((y + h + ( g / (Math.tan(alpha)) ))**2  + x**2))

    //  method 3 - used for consolelog testing
    // console.log(TD = 2 * (Math.sqrt((.240 + .191 + ( .425 / (Math.tan(45)) ))**2  + .840**2)))

    // Half of the thickness of the back wheel
    let halfWheelThickness = 3.81
    // 6 inches, converted into cm for side padding
    let comfortPadding = 18.288
    // Finds minimum width of hallway
    let minHallway = y + TD/2 + halfWheelThickness + comfortPadding;

    // Console.logs: diameter of turn circle, radius, and minimum width of hallway
    console.log("diameter " + TD)
    console.log("Radius " + TD/2)
    console.log("Minimum sized hallway " + minHallway)

    // Outputs information: diameter of turn circle, radius, and minimum width of hallway
    document.getElementsByClassName("output1")[0].textContent = "diameter " + TD.toFixed(1) + "cm";
    document.getElementsByClassName("output2")[0].textContent = "Radius " + (TD/2).toFixed(1) + "cm";
    document.getElementsByClassName("output3")[0].textContent = "Minimum sized hallway " + minHallway.toFixed(1) + "cm";

    // document.getElementsByClassName("output4")[0].textContent = TD

});

// Assumptions:
// Output will be same units input. This will be predefined to the user to be cm
// Wheel chair starts turn in center of door way
// Ideal turn angle is instantly achieved
// Wheel chair will be able to make a single turn into hallway without having to backup
