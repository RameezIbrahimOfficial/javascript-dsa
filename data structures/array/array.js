const findIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const appendElement = (arr, element) => {
  arr[arr.length] = element;
};

const prependElement = (arr, element) => {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
};

const removeFromStart = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
};

const removeFromEnd = (arr) => {
  arr.length = arr.length - 1;
};

const insertAtIndex = (arr, index, element) => {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = element;
};

const removeAtIndex = (arr, index) => {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
};

const removeByValue = (arr, value) => {
  const index = findIndex(arr, value);
  if (index !== -1) {
    removeAtIndex(arr, index);
  }
};

const search = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};

const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
};

const sortArray = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

let myArray = [4, 2, 7, 1, 5];
console.log("Original Array:", myArray);

appendElement(myArray, 6);
prependElement(myArray, 3);
insertAtIndex(myArray, 2, 8);

console.log("Array after insertion operations:", myArray);

removeFromStart(myArray);
removeFromEnd(myArray);
removeAtIndex(myArray, 1);
removeByValue(myArray, 7);

console.log("Array after deletion operations:", myArray);

reverseArray(myArray);
console.log("Reversed Array:", myArray);

sortArray(myArray);
console.log("Sorted Array:", myArray);