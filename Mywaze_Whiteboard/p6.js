function findMaxOccurrence(input) {
    // Step 1: Remove whitespaces and punctuation, retain only alphanumeric characters
    const sanitizedString = input.replace(/[^a-zA-Z0-9]/g, '');

    // Step 2: Create a character frequency map
    const charCount = {};
    for (const char of sanitizedString) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 3: Find the character with the maximum frequency
    let maxChar = null;
    let maxCount = 0;

    for (const char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    // Step 4: Return the result
    return {
        character: maxChar,
        occurrence: maxCount
    };
}

// Example usage
const input = "Hello, world!";
const result = findMaxOccurrence(input);
console.log(`Character: '${result.character}', Occurrence: ${result.occurrence}`);
