function insertionSort(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let curr = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j]>curr){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = curr
    }
}

let arr = [10,30,5,-3,3,55];
insertionSort(arr);
console.log(arr);