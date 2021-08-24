export function isPalindrome(inputString) {
  let start = 0;
  let end = inputString.length - 1;

  while(start < end) {
    if(inputString.charAt(start) != inputString.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}