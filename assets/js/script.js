// Assignment code here

// Declare criteria arrays
var isLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var isUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var isNumber = ["0" , "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var isSpecialCharacter = ["!", "?" ] // finish adding all special characters



function generatePassword() {
  console.log("You clicked the button.");

// 1. Prompt the user for the password criteria
//    a. Password length 8 < 128 characters
  var numChar = window.prompt('How many characters do you want? You can choose between 8 and 128 characters.');
  console.log(numChar);

  if (numChar < 8 || numChar > 128) {
    window.alert("That is not an eligible password length.");
    numChar = window.prompt('How many characters do you want? You can choose between 8 and 128 characters.');
  } 

  window.confirm("Do you want lowercase characters in your password?");

  // Need to make it so if user picks "OK", include lowercase characters.
  // Else user picks "Cancel", which breaks there. 


//    b. Lowercase, 


//    C. uppercase
//    D. numbers
//    E. special characters
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
