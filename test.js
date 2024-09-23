//function converts a Roman numeral string `s` into an integer
function romanToInt(s) {

    //object that maps Roman numeral characters to their corresponding integer values
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    //Initializes a variable "total" to accumulate the resulting integer value
    let total = 0;

    //loop that iterates through each character in the input string 's'
    for (let i = 0; i < s.length; i++) {

        //Retrieves the integer value of the current Roman numeral character
        const current = romanMap[s[i]];

        //Retrieves the integer value of the next character (if it exists) or defaults to '0' if it doesn't
        const next = romanMap[s[i + 1]] || 0;

        //If the current value is less than the next value (indicating a subtractive combination, e.g., IV), it subtracts the current value from 'total'; 
        //otherwise, it adds the current value.
        total += current < next ? -current : current;
    }
    return total;
}

//function converts an integer "num" into a Roman numeral string
function intToRoman(num) {

    //array of integer values representing Roman numeral denominations in descending order
    const val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];

    //array of corresponding Roman numeral symbols that match the values in the 'val' array
    const syms = [
        'M', 'CM', 'D', 'CD',
        'C', 'XC', 'L', 'XL',
        'X', 'IX', 'V', 'IV',
        'I'
    ];

    //empty string to build the resulting Roman numeral
    let roman = '';

    //loop to iterate through each value in the 'val' array
    for (let i = 0; i < val.length; i++) {

        //Checks if the current integer 'num' is greater than or equal to the current value in 'val'
        while (num >= val[i]) {

            //Appends the corresponding Roman numeral symbol to the 'roman' string
            roman += syms[i];

            //Subtracts the current value from 'num'
            num -= val[i];
        }
    }
    return roman;
}

// Example
console.log(romanToInt("XIV")); // 14
console.log(intToRoman(14));    // XIV
