const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

const arr = [1,5,3,4,7,8]

console.log(linearSearch(arr, 4))