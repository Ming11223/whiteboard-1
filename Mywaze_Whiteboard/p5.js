function areAnagrams(str1, str2) {
    // Normalize strings: remove spaces and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if lengths are different
    if (str1.length !== str2.length) {
        return false;
    }

    // Count character frequencies in both strings
    const charCount1 = {};
    const charCount2 = {};

    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare character counts
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

// Example Usage
const input1 = "listen";
const input2 = "silentt";
console.log(areAnagrams(input1, input2)); // Output: false
