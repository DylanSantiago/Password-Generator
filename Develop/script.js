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
  
  // Empty array to store password criteria
  var passwordCriteria = [];

  // Elements password will contain
  var numberArray = [1,2,3,4,5,6,7,8,9,0];
  var specialArray = ["!","@","#","$","%","^","&","*","(",")","?"];
  var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // If user confirms a prompt, elements array will be pushed to the empty array above
  if (numberPrompt === true) {
    passwordCriteria.push(numberArray);
  }
  if (specialPrompt === true) {
    passwordCriteria.push(specialArray);
  }
  if (upperPrompt === true) {
    passwordCriteria.push(upperArray);
  }
  if (lowerPrompt === true) {
    passwordCriteria.push(lowerArray);
  };

  // Variable that will hold randomly selected characters
  var passwordSelection = " ";

  // For loop setting character count set by user
  for (var i = 0; i < characterPrompt; i++) {
   
   // Methods used to randomly select elements from chosen arrays by user
   var passwordArrays = Math.floor(Math.random() * passwordCriteria.length);
   var passwordContents = Math.floor(Math.random() * passwordCriteria[passwordArrays].length);
    
   // Grouping selected elements and storing them in variable
   passwordSelection = passwordSelection + passwordCriteria[passwordArrays][passwordContents];
  
  }

  // Generated Password
 return passwordSelection

}
