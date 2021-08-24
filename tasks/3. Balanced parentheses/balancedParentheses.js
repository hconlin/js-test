export function areParenthesesBalanced(inputString) {
  let str = inputString;
  let open = 0;
  let close = 0;
  for (let i = 0; i < str.length; i ++) {
    if (str.charAt(i) == '(') {
      open++;
      close++;
    }
    else if (str.charAt(i) == ')'){
      open--;
      close--;
    }
    //no possible way for parentheses to be balanced
    if(close == -1){
      return false;
    }
  }

  //equal opeing to closing parentheses. return true
  if(open == 0){
    return true;
  }

  return false;
}