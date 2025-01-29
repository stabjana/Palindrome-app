// split reverse join

export function checkPalindrome(str: string) {
    return str === str.split('').reverse().join('');
  }
