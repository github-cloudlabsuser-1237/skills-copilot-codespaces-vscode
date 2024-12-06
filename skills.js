function calculateNumbers(var1, var2) {
  return var1 + var2;
}

function isStringAPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

module.exports = {
  calculateNumbers,
  isStringAPalindrome,
  isPrime
};
