// This function is to check whether the string is a palindrome.
function isPalindrome(str) {

    const cleanStr = str.toLowerCase().replace(/[^a-z 0-9]/g, '');
    console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);
    return cleanStr === reverseStr;
}

// This function is to display whether the string is a palindrome.
function palindromeChecker() {

    // shift+alt + downarrow key is used to duplicate the line downside.

    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    if (isPalindrome(inputText.value)) {
        result.textContent = `"${inputText.value}" is a Palindrome`;
        console.log("The string is a palindrome");
    } else {
        result.textContent = `"${inputText.value}" is not a Palindrome`;
    }
    result.classList.add('fadeIn');  //here animations is applied to add fadeIn animation to the result.
    inputText.value = ''; //empting the string
}

document.getElementById('checkButton').addEventListener("click", palindromeChecker);
