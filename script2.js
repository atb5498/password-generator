function generatePassword(passwordLength, useLowercase, useUppercase, useNumbers, useSpecialCharacters) {
    if (passwordLength < 8 || passwordLength > 128) {
        throw new Error("Password length must be greater than or equal to 8 and less than or equal to 128 characters");
    }

    if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialCharacters === false) {
        throw new Error("Password must include atleast one character type")
    }

    var charSet = "";

    if (useLowercase === true) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }

    if (useUppercase === true) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (useNumbers === true) {
        charSet += "0123456789";
    }

    if (useSpecialCharacters === true) {
        charSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    var generatedPassword = "";

    for (var i = 0; i < passwordLength; i++) {
        var characterIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet.charAt(characterIndex);
    }

    return generatedPassword;
}
