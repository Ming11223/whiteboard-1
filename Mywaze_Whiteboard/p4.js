function areAnagrams(str1, str2) {
    // Remove spaces and convert strings to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // If lengths differ, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert strings to arrays, sort them, and join back to compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example Usage
const input1 = "restful";
const input2 = "fluster";
console.log(areAnagrams(input1, input2)); // Output: true
