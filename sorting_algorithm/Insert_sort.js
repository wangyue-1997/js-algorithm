/**
 * @param {number[]} arr
 * @return {number[]}
 */

const data = [1,7,8,43,2,21,7,88,9,0,-4,19,3,6];

//第一种

function insertSort1(arr) {
  for(let i = 1 ; i<arr.length ; i++) {
    if(arr[i]<arr[i-1]) {
      const current = arr[i];
      let j = i - 1;
      while(j>=0 && current<arr[j]) {
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = current;
    }
  }
  return arr;
}

console.log(insertSort1(data))

//第二种

function insertSort2(arr) {
  for(let i = 1 ; i<arr.length ; i++) {
    for(let j = i ; j>0 ; j--) {
      if(arr[j] < arr[j-1]) {
        const temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

console.log(insertSort2(data))