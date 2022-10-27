// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characterPrompt = prompt("Your password must be in between 8 and 128 charcters, how many would you like to include?");

  if (characterPrompt < 8 || characterPrompt > 128)  
  alert("Error, must be greater than 8 and no more than 128 characters long");

  var numberPrompt = confirm("Would you like to include numbers in your password?");
  var specialPrompt = confirm("Would you like to include special characters in your password?");
  var upperPrompt = confirm("Would you like to include uppercase characters in your password?");
  var lowerPrompt = confirm("Would you like to include lowercase characters in your password?");
  
  let passwordCriteria = [];

  let numberArray = [0,1,2,4,5,6,7,8,9]
  let specialArray = ["!,@,#,$,%,^,&,*,(,)"]
  let upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


}