export function encryptCaesar(inputString, key) {
  
  let str = inputString;
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charsLength = chars.length;
  let ans = "";
  
  for(let i = 0; i < str.length; i++) {
    let newIndex = (chars.indexOf(str.charAt(i)) + key) % charsLength;
    ans += chars.charAt(newIndex);
  }

  return ans;
}
