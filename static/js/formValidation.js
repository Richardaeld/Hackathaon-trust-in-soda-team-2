// field validation copied from p2 project - Joanna Gorska

/**
 * Function to add class
 */
 function addClass(className, targetNode) {
    targetNode.classList.add(className);
  }
  
  /**
   * Function to remove class
   */
  
  function removeClass(className, targetNode){
    targetNode.classList.remove(className);
  }
  
  /**
   * Function to set attribute
   */
  
  function setAtribute(atributeName, atributeValue, targetNode) {
    targetNode.setAttribute(atributeName, atributeValue);
  }
  /**
   * Function to remove attribute
   */
  function removeAtribute(atributeName, atributeValue, targetNode) {
    targetNode.removeAttribute(atributeName, atributeValue);
  }
  
//Regex testing if the input field contains letters and a few chosen characters 

const regexLetters = /[a-zA-Z \,'\.\-\']/g;

/**
 *  Function testing if name input field contains letters and chosen special characters
 *  function testing if particular field is in line with Regex
 */

function containsLetters(inputField) {
  let valueLetters = inputField.value;
  return regexLetters.test(valueLetters);
}
  /**
   * Function to display Error after validation has been failed
   * makes div with help message visible and in red, input's border is red and red icon with exclamation mark is displayed in input field
   */
  
  function displayErrorValidation(targetNodeInput, targetNodeHelp) {
  
    addClass("is-invalid",targetNodeInput);
    setAtribute("aria-describedby", "name-help", targetNodeInput);
    removeClass("my-invisible", targetNodeHelp);
    addClass("invalid-feedback", targetNodeHelp);
  
  }
  
  /**
   * Function to remove display Error after validation has been passed
   * makes div with help message invisible, input border comes back to standard and icon with exclamation mark disapears
   */
  
  function removeErrorValidation(targetNodeInput, targetNodeHelp) {
  
    removeClass("is-invalid",targetNodeInput);
    removeAtribute("aria-describedby", "name-help", targetNodeInput);
    addClass("my-invisible", targetNodeHelp);
    removeClass("invalid-feedback", targetNodeHelp);
  }
  
//functions to display result of the validation of each particular field, returns true or highlights the input field red

function validateInputField(inputField, helpDiv) {

    if (containsLetters(inputField)) {
      
      helpDiv.innerHTML = "Please put numbers in this field";
      displayErrorValidation(inputField, helpDiv);
      return(false);
  
    } else if (inputField.value === "") {
  
        helpDiv.innerHTML = "This field is required";
        displayErrorValidation(inputField, helpDiv);
        return(false);
  

    } else if (inputField.value < 0) {
  
      helpDiv.innerHTML = "We cannot accept minus values";
      displayErrorValidation(inputField, helpDiv);
      return(false);


    } else if (inputField.value == 0) {
      
      helpDiv.innerHTML = "This field is required";
      displayErrorValidation(inputField, helpDiv);
      return(false);
    
    
  
    } else {
      
  
      removeErrorValidation(inputField, helpDiv);
      return(true);
  
    }
    
  }



// variables needed for all validation results function and for validation on input

var inputWidthBackAxis = document.getElementById("input-width-back-axis")
var helpWidthBackAxis = document.getElementById("help-width-back-axis")

var inputWidthFrontAxis = document.getElementById("input-width-front-axis")
var helpWidthFrontAxis = document.getElementById("help-width-front-axis")

var inputBetweenFrontAndBackAxis = document.getElementById("input-between-front-and-back-axis")
var helpBetweenFrontAndBackAxis = document.getElementById("help-between-front-and-back-axis")

var inputBackAxisToFootrest = document.getElementById("input-back-axis-to-footrest")
var helpBackAxisToFootrest = document.getElementById("help-back-axis-to-footrest")

var inputTurnDegreeFront = document.getElementById("input-turn-degree-front")
var helpTurnDegreeFront = document.getElementById("help-turn-degree-front")

/**
 * Function to check if each validation result, for each input field is false
*/

function allValidationResults() {

    if (validateInputField(inputWidthBackAxis, helpWidthBackAxis) == false) {
      console.log("input-width-back-axis failed all validation results");
      return(false);

    } else if (validateInputField(inputWidthFrontAxis, helpWidthFrontAxis) == false) {
        console.log("input-width-front-axis failed all validation results");
        return(false);
    
    } else if (validateInputField(inputBetweenFrontAndBackAxis, helpBetweenFrontAndBackAxis) == false) {
        console.log("input-between-front-and-back-axis failed all validation results");
        return(false);

    } else if (validateInputField(inputBackAxisToFootrest, helpBackAxisToFootrest) == false) {
        console.log("input-back-axis-to-footrest failed all validation results");
        return(false);
    
    } else if (validateInputField(inputTurnDegreeFront, helpTurnDegreeFront) == false) {
        console.log("input-turn-degree-front failed all validation results");
        return(false);

    } else {
        console.log("all fields passed all validation results");
        return(true);
        
      }
    }

//event listener for "submit"
var wheelchairForm = document.getElementsByTagName("FORM")[0];
wheelchairForm.addEventListener("submit", handleFormSubmit);

/**
 * Main function to handle submit event
 */

 function handleFormSubmit(event) {
  event.preventDefault();
  if (allValidationResults() == false) {
      console.log("stay on index page");

  } else {
      console.log("all good to go");
      wheelchairForm.submit();
  }

}

// debounce and instant feedback on input copied from the below link
//https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/

/**
 * Function to delay response
 */

 const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
  };

/**
* Gives instant feedback on input with the delay set above
*/

wheelchairForm.addEventListener ('input', debounce(function (e) {
    switch (e.target.id) {
        case 'input-width-back-axis':
            validateInputField(inputWidthBackAxis, helpWidthBackAxis);
            break;
        case 'input-width-front-axis':
            validateInputField(inputWidthFrontAxis, helpWidthFrontAxis);
                break;
        case 'input-between-front-and-back-axis':
            validateInputField(inputBetweenFrontAndBackAxis, helpBetweenFrontAndBackAxis);
                break;
        case 'input-back-axis-to-footrest':
            validateInputField(inputBackAxisToFootrest, helpBackAxisToFootrest);
                break;
        case 'input-turn-degree-front':
            validateInputField(inputTurnDegreeFront, helpTurnDegreeFront);
                break;
    }
}));