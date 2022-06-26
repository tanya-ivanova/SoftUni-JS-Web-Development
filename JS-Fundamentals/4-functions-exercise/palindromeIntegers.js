function palindromeIntegers (nums) {
    for (let i = 0; i < nums.length; i++) {
        let numberAsString = nums[i].toString();
        let isPalindrome = true;
        let counter = 0;
        
        while (counter < numberAsString.length / 2) {
            counter++;
            if (numberAsString[counter] !== numberAsString[numberAsString.length - 1 - counter]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
    }
}

palindromeIntegers([32,2,232,1010]);