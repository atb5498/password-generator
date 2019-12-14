function generatePassword() {
    var passwordLength = parseInt(prompt("Enter a character length between 8 and 128"));

    if (passwordLength < 8) {
        alert("Password length must be greater than or equal to 8 characters");
        return;
    }

    if (passwordLength > 128) {
        alert("Password length must be less than or equal to 128 characters");
        return;
    }

    if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialCharacters === false) {
        alert("Password must include atleast one character type")
        return;
    }

    var useLowercase = confirm("Would you like to include lowercase letters?");
    var useUppercase = confirm("Would you like to include uppercase letters?");
    var useNumbers = confirm("Would you like to include numbers?");
    var useSpecialCharacters = confirm("Would you like to include special characters?");
    var charSet = "";

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

    for (var i = 0; i < passwordLength; i++) {
        var characterIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet.charAt(characterIndex);
    }

    document.getElementById("password").textContent = generatedPassword;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
