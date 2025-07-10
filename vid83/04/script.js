// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
function isValidPassword(password) {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return minLength && hasUppercase && hasLowercase && hasDigit;
}
console.log(isValidPassword("Hello123"));    // ✅ true
console.log(isValidPassword("hello123"));    // ❌ false (no uppercase)
console.log(isValidPassword("HELLO123"));    // ❌ false (no lowercase)
console.log(isValidPassword("HelloWorld"));  // ❌ false (no digit)
console.log(isValidPassword("Hi1"));         // ❌ false (too short)