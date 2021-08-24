export function getFizzBuzzUntil(n) {
  let arr = [];

  for (let i = 1; i <= n; i++){
    let str = "";

    //multiple of 3
    if (i % 3 == 0) {
      str += "Fizz";
    }

    //multiple of 5
    if(i % 5 == 0) {
      str+= "Buzz";
    }

    if(str == ""){
      arr.push(i);
    } else {
      arr.push(str);
    }
  }

  return arr;
}
