const binarySearch = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) return middleIndex;
  else if (target < arr[middleIndex])
    return binarySearch(arr, target, leftIndex, middleIndex - 1);
  else return binarySearch(arr, target, middleIndex + 1, rightIndex);
};

const arr = [1, 3, 4, 5, 7, 8];
console.log(binarySearch(arr, 5, 0, arr.length - 1));