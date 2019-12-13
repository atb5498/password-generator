function generatePassword(passwordLength) {
    if (passwordLength < 8 || passwordLength > 128) {
        throw new Error('Password length must be greater than or equal to 8 and less than or equal to 128');
    }

    var charSet = "abcdefghij";
    var generatedPassword = "";

    for (var i = 0; i < passwordLength; i++) {
        var characterIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet.charAt(characterIndex);
    }

    return generatedPassword;
}

console.log(generatePassword(8));