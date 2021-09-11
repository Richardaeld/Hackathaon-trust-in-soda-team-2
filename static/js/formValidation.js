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

function validateInputField(inputField, helpDiv, ) {

    if (inputField.value == 0) {
  
      helpDiv.innerHTML = "This field is required";
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

    ///////////////////////////////add to test if the input is not a number
    ////////////////////////////////isNaN(123) //false
  
    } else {
      
  
      removeErrorValidation(inputField, helpDiv);
      return(true);
  
    }
    
  }



/**
 * Function to check if each validation result, for each input field is false
*/

function allValidationResults() {
    let inputWidthBackAxis = document.getElementById("input-width-back-axis")
    let helpWidthBackAxis = document.getElementById("help-width-back-axis")

    let inputWidthFrontAxis = document.getElementById("input-width-front-axis")
    let helpWidthFrontAxis = document.getElementById("help-width-front-axis")

    let inputBetweenFrontAndBackAxis = document.getElementById("input-between-front-and-back-axis")
    let helpBetweenFrontAndBackAxis = document.getElementById("help-between-front-and-back-axis")

    let inputBackAxisToFootrest = document.getElementById("input-back-axis-to-footrest")
    let helpBackAxisToFootrest = document.getElementById("help-back-axis-to-footrest")

    let inputTurnDegreeFront = document.getElementById("input-turn-degree-front")
    let helpTurnDegreeFront = document.getElementById("help-turn-degree-front")
    

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
wheelchairForm.addEventListener("submit", handleCalculatorSubmit);

/**
 * Main function to handle submit event
 */

 function handleCalculatorSubmit(event) {
  event.preventDefault();
  if (allValidationResults() == false) {
      console.log("stay on the page calculator form");

  } else {
      console.log("all good to go");
      calulatorForm.submit();
  }

}
