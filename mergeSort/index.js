function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else if (right[rightIndex] < left[leftIndex]) {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  };
  return merge(mergeSort(left), mergeSort(right));
}
