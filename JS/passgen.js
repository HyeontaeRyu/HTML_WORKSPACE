function getRandomCharactor() {
    var charactors = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    var randomIndex = Math.floor(Math.random() * charactors.length);
    return charactors[randomIndex];    
}

function generatePassword(passwordLength) {
    var password = '';
    var passwordLength = passwordLength;
    for (var i = 0; i < passwordLength; i++) {
        password += getRandomCharactor();
    }
    return password;
}