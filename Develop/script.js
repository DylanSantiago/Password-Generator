// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characterPrompt = prompt("Your password must be in between 8 and 128 charcters, how many would you like to use?");

  // Function restarts if a non numerical character is entered
  if (isNaN(characterPrompt)) {
    alert("Please click Generate Password again and enter a numerical digit greater than 8 and less than 128.")
    return;
  }

  // Function restarts if character validation is not met
  if (characterPrompt < 8 || characterPrompt > 128) {
    alert("Error, your entry must be greater than 8 and no more than 128 characters long");
    return;
  }

  // Prompts for user to decide what they want password to contain.
  var numberPrompt = confirm("If you would like to include numbers in your password, Click OK.");
  var specialPrompt = confirm("If you would like to include special characters in your password, Click OK.");
  var upperPrompt = confirm("If you would like to include uppercase characters in your password, Click OK.");
  var lowerPrompt = confirm("If you would like to include lowercase characters in your password, Click OK.");
  
  // Empty string to store password criteria
  var passwordCriteria = " ";

  // Elements password will contain
  var numberString = "1234567890";
  var specialString = "!@,#$%^&*()?><;:{}][/";
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerString = "abcdefghijklmnopqrstuvwxyz";

  // If user confirms a prompt, elements string will be pushed to the empty string above
  if (numberPrompt === true) {
    passwordCriteria += numberString;
  }
  if (specialPrompt === true) {
    passwordCriteria += specialString;
  }
  if (upperPrompt === true) {
    passwordCriteria += upperString;
  }
  if (lowerPrompt === true) {
    passwordCriteria += lowerString;
  };

  // Variable that will hold randomly selected characters
  var passwordSelection = " ";

  // For loop setting character count set by user
  for (var i = 0; i < (characterPrompt); i++) {
   
   // Methods used to randomly select elements from chosen stringd by user
   var passwordStrings = Math.floor(Math.random() * passwordCriteria.length);
   
   // Grouping selected elements and storing them in variable
   passwordSelection += passwordCriteria[passwordStrings];
  
  }

  // Generated Password
 return passwordSelection

}