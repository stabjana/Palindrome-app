// split reverse join

export function checkPalindrome(str: string) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // deletes all other characters and lowerCase
  return str === str.split("").reverse().join("");
}
