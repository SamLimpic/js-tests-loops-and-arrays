// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == str[0]) {
            for (let j = 0; j < str.length; j++) {
                if (alphabet[i] == str[j]) {
                    i++
                } else if (alphabet[i] != str[j]) {
                    return alphabet[i]
                }
            }
        }
    }
    return "no missing letters"
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return true
            }
        }
    }
    return false
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
    let newArr = []
    let e = 0
    let o = 0
    let odd = arr.filter(odd => odd % 2 == 1)
    let even = arr.filter(even => even % 2 == 0)
    odd.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(even[e])
            e++
        } else {
            newArr.push(odd[o])
            o++
        }
    }
    return newArr
}