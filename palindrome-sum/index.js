// Sum of all palindrome numbers of n-digits

function palindrome(size){
    
    const half = Math.floor(size / 2);
    const halfSize = size % 2 === 0 ? size / 2 : Math.floor(size / 2) + 1;

    let zeroStr = '0';
    let maxStr = '9';

    let val = parseInt('1' + zeroStr.repeat(halfSize - 1));
    const limit = parseInt(maxStr.repeat(halfSize));

    let sum = 0;

    while(val <= limit){
        let backHalf = val.toString();
        backHalf = backHalf.length > 1 ? backHalf.substring(0, half) : val.toString();
        backHalf = backHalf.split('').reverse().join('');

        const newVal = parseInt(val.toString() + backHalf);
       
        sum += newVal;
        val++;
    }

    return sum;
}

console.log(palindrome(5));