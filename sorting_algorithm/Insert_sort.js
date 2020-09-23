/**
 * @param {number[]} arr
 * @return {number[]}
 */

const data = [1,7,8,43,2,21,7,88,9,0,-4,19,3,6];

function insertSort(arr) {
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

console.log(insertSort(data))