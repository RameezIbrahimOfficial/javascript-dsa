const prepend = (arr, value) => {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
};

const append = (arr, value) => {
  arr[arr.length] = value;
};

const insert = (arr, value, index) => {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = value;
};

const removeFromFront = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
};

const removeFromEnd = (arr) => {
  arr.length--;
};

const removeFrom = (arr, index) => {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
};

const arr = [];

prepend(arr, 10);
append(arr, 30);
append(arr, 40);
append(arr, 50);
insert(arr, 20, 1);

console.log(arr);

removeFromFront(arr);
removeFromEnd(arr);
removeFrom(arr, 3);

console.log(arr);
