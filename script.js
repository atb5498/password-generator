function generatePassword(passwordLength) {
    var charSet = "abcdefghij";
    var generatedPassword = "";

    for (var i = 0; i < passwordLength; i++) {
        var characterIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet.charAt(characterIndex);
    }

    return generatedPassword;
}

console.log(generatePassword(10));
console.log(generatePassword(5));
console.log(generatePassword(23005));