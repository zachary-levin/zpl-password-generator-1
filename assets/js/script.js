// Assignment code here

function generatePassword() {
  console.log("You clicked the button.");
  var promptUser = window.confirm('Would you like to generate a password?');

// 1. Prompt the user for the password criteria
//    a. Password length 8 < 128 characters
//    b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input. 
// 3. Generate password based on criteria.

//Math.random().toString(36).slice(2);

// 4. Display password in the page.
  return "Generated password will go here.";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
