export function getFibonacciUntil(n) {
  
  if (n == 2) {
  	return [0, 1];
  }

  let arr = getFibonacciUntil(n - 1);
  arr.push(arr[n - 2] + arr[n - 3]);
  return arr;
}
