//ascii approach
function isValidPassword(password) {
    if (password.length < 8) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        let code = password.charCodeAt(i); // Get ASCII code

        if (code >= 65 && code <= 90) hasUpper = true;       // A-Z
        else if (code >= 97 && code <= 122) hasLower = true; // a-z
        else if (code >= 48 && code <= 57) hasDigit = true;  // 0-9

        // Break early if all are satisfied
        if (hasUpper && hasLower && hasDigit) return true;
    }

    return false; // At least one condition failed
}
console.log(isValidPassword("Hello123"));   // ✅ true
console.log(isValidPassword("hello123"));   // ❌ false (no uppercase)
console.log(isValidPassword("HELLO123"));   // ❌ false (no lowercase)
console.log(isValidPassword("HelloWorld")); // ❌ false (no digit)
console.log(isValidPassword("Hi1"));        // ❌ false (too short)