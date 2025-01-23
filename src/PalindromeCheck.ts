// split reverse join

function checkPalindrome(str: string) {
    return str === str.split('').reverse().join('');
  }

  export default checkPalindrome;