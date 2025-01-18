function areAnagrams(str1, str2) {
    // Step 1: Normalize the strings by removing non-alphanumeric characters and converting to lowercase
    const normalize = (str) =>
        str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Step 2: If lengths differ, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Step 3: Count character frequencies in the first string
    const charCount = {};
    for (const char of normalizedStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 4: Check character frequencies in the second string
    for (const char of normalizedStr2) {
        if (!charCount[char]) {
            return false; // If a character is not in the map, it's not an anagram
        }
        charCount[char] -= 1; // Decrement the count for each matching character
    }

    // Step 5: Ensure all character counts are zero
    return Object.values(charCount).every((count) => count === 0);
}

// Example usage
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("debit card", "Bad credit")); // Output: true
console.log(areAnagrams("hello", "bye")); // Output: false
console.log(areAnagrams("restful", "fluster")); // Output: true
console.log(areAnagrams("listen", "silentt")); // Output: false
console.log(areAnagrams("Conversation", "Voices, rant on")); // Output: true
