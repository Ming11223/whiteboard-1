function findSquareRoot(x) {
    // Edge case: If x is 0 or 1, return x as its square root
    if (x === 0 || x === 1) {
        return x;
    }

    // Binary search variables
    let start = 1;
    let end = x;
    let result = 0;

    while (start <= end) {
        // Calculate mid
        let mid = Math.floor((start + end) / 2);

        // Check if mid * mid equals x
        if (mid * mid === x) {
            return mid;
        }

        // If mid * mid is less than x, search in the right half
        if (mid * mid < x) {
            start = mid + 1;
            result = mid; // Store the closest lower value
        } else {
            // If mid * mid is greater than x, search in the left half
            end = mid - 1;
        }
    }

    // Return the result (integer square root)
    return result;
}

// Example usage
console.log(findSquareRoot(4));   // Output: 2
console.log(findSquareRoot(9));   // Output: 3
console.log(findSquareRoot(16));  // Output: 4
console.log(findSquareRoot(25));  // Output: 5
console.log(findSquareRoot(36));  // Output: 6
