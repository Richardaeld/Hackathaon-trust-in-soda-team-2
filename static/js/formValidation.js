

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

  