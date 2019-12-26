function generatePassword() {
    //Asks user to determine password length and character set
    var passwordLength = parseInt(prompt("Enter a character length between 8 and 128"));
    var useLowercase = confirm("Would you like to include lowercase letters?");
    var useUppercase = confirm("Would you like to include uppercase letters?");
    var useNumbers = confirm("Would you like to include numbers?");
    var useSpecialCharacters = confirm("Would you like to include special characters?");
    var charSet = "";

    //Determines generated password is between 8 and 128 characters long
    if (passwordLength < 8) {
        alert("Password length must be greater than or equal to 8 characters");
        return;
    }

    if (passwordLength > 128) {
        alert("Password length must be less than or equal to 128 characters");
        return;
    }

    //Enforces at least one character set is chosen
    if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialCharacters === false) {
        alert("Password must include atleast one character type");
        return;
    }

    if (useLowercase) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }

    if (useUppercase) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (useNumbers) {
        charSet += "0123456789";
    }

    if (useSpecialCharacters) {
        charSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    var generatedPassword = "";

    //Randomizes characters based on chosen character limit and character sets
    for (var i = 0; i < passwordLength; i++) {
        var characterIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet.charAt(characterIndex);
    }

    //Displays generated password
    document.getElementById("generated-password").textContent = generatedPassword;
}

//Copies generated password to clipboard
function copyPassword() {
    var copyText = document.getElementById("generated-password");
    copyText.select();
    document.execCommand("copy");
    alert("Your password " + copyText.value + " was copied to the clipboard");
}
