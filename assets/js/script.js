// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);
// Declare criteria arrays
var isLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var isUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var isNumber = ["0" , "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var isSpecialCharacter = ["!", "?", "@", "#", "%", "^", "&", "*", "-", "_", ".", "+"]; 
var generateBtn = document.querySelector("#generate");

var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialCharacter;
var passwordLength = " ";


function generatePassword() {
  //console.log("You clicked the button.");

// 1. Prompt the user for the password criteria
//    a. Password length 8 < 128 characters
  var charLength = (prompt('How many characters do you want? You can choose between 8 and 128 characters.'));
  console.log(charLength);

  while (charLength < 8 || charLength > 128) {
    window.alert("That is not an eligible password length.");
    var charLength = (prompt('How many characters do you want? You can choose between 8 and 128 characters.'));
  } 

  alert("Your password will contain " + charLength + " characters.");

  var confirmLowerCase = confirm("Do you want lowercase characters?");
  var confirmUpperCase = confirm("Do you want uppercase characters?");
  var confirmNumber = confirm("Do you want numbers?");
  var confirmSpecialCharacter = confirm("Do you want special characters?");

//  var confirmLowerCase = window.confirm("Do you want lowercase characters in your password?");

  while (confirmLowerCase === false && confirmUpperCase === false && confirmNumber === false && confirmSpecialCharacter === false) {
    alert("You must choose at least one set of criteria for your password.");
    var confirmLowerCase = confirm("Do you want lowercase characters?");
    var confirmUpperCase = confirm("Do you want uppercase characters?");
    var confirmNumber = confirm("Do you want numbers?");
    var confirmSpecialCharacter = confirm("Do you want special characters such as !, ?, &, etc.?");
  }

var passwordChar = [];
  
//    b. Lowercase
if (confirmLowerCase) {
    passwordChar = passwordChar.concat(isLowerCase)
  }  

//    C. uppercase
  if (confirmUpperCase) {
    passwordChar = passwordChar.concat(isUpperCase)
  }

//    D. numbers
  if (confirmNumber) {
    passwordChar = passwordChar.concat(isNumber)
  }
//    E. special characters
  if (confirmSpecialCharacter) {
    passwordChar = passwordChar.concat(isSpecialCharacter)
  }

  console.log(passwordChar);

  var finalPassword = ""
 
// 3. Generate password based on criteria.

  for (var finalPasswordLength = 0; finalPasswordLength < passwordLength; finalPasswordLength++) {
    finalPasswordLength = finalPasswordLength + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(finalPassword);
  }


// 4. Display password in the page.
  //return finalPassword;

  return "Final password will go here."
}

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
