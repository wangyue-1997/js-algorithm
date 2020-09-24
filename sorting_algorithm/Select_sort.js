/**
 * @param {number[]} arr
 * @return {number[]}
 */

const data = [1,7,8,43,2,21,7,88,9,0,-4,19,3,6];

function selectSort(arr) {
  for(let i = 0 ; i<arr.length - 1 ; i++) {
    for(let j = i+1 ; j<arr.length ; j++) {
      if(arr[j]<arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

console.log(selectSort(data))