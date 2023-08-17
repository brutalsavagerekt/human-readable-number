module.exports = function toReadable(number) {
    const nums = {
        0: "zero", 1: "one",
        2: "two", 3: "three",
        4: "four", 5: "five",
        6: "six", 7: "seven",
        8: "eight", 9: "nine"
    };
    const numsTeen = {
        10: "ten", 11: "eleven",
        12: "twelve", 13: "thirteen",
        14: "fourteen", 15: "fifteen",
        16: "sixteen", 17: "seventeen",
        18: "eighteen", 19: "nineteen"
    };
    const numsRty = {
        10: "ten", 20: "twenty",
        30: "thirty", 40: "forty", 50: "fifty",
        60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
    };

    const munsHundred = {
        100: "one hundred", 200: "two hundred",
        300: "three hundred", 400: "four hundred",
        500: "five hundred", 600: "six hundred",
        700: "seven hundred", 800: "eight hundred",
        900: "nine hundred"
    };

    if (number < 10) {
        return nums[number]
    } else if ((number >= 10) && (number < 100) && (number % 10 == 0)) {
        return numsRty[number]
    } else if (number % 100 == 0) {
        return munsHundred[number]
    } else if (number > 10 && number < 20) {
        return numsTeen[number]
    } else if ((number > 20) && (number < 100) && (number % 10 != 0)) {
        let count = number % 10
        let output = `${numsRty[number - count]} ${nums[count]}`
        return output
    } else if ((number > 100) && (number % 100 != 0)) {
        // без 100
        let count = number % 100
        // целая сотка
        let hundr = number - count
        // остаток от 10
        let ten = count % 10
        if (ten % 10 == 0) {
            return `${munsHundred[hundr]} ${numsRty[count]}`
        } else if ((count > 10) && (count < 20)) {
            return `${munsHundred[hundr]} ${numsTeen[count]}`
        } else if (count < 10) {
            return `${munsHundred[hundr]} ${nums[count]}`
        } else {
            return `${munsHundred[hundr]} ${numsRty[count - ten]} ${nums[ten]}`
        }
    }
}