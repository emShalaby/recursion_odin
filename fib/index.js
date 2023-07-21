function fibs(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

function fibsRec(num) {
  return num == 2
    ? [0, 1]
    : [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}
