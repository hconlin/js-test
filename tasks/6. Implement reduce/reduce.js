export function Reduce(array, reducer, initialValue) {
  let acc = initialValue;
  for(let i = 0; i < array.length; i++){
    acc = reducer(acc, array[i]);
  }
  return acc;
}
