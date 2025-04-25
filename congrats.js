/**
 * ROT13 decoder script
 * Decodes the given string and prints the result
 */

function rot13Decode(encodedString) {
  return encodedString.replace(/[a-zA-Z]/g, function(char) {
    // Get the ASCII code
    const charCode = char.charCodeAt(0);
    
    // Handle uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    }
    
    // Handle lowercase letters
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    }
    
    // Return non-alphabetic characters as is
    return char;
  });
}

// The encoded string
const encodedString = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

// Decode and print the message
const decodedString = rot13Decode(encodedString);
console.log(decodedString);