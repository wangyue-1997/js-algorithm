/**
 * 
 * @param {number[]} arr
 */

const data = [1,7,8,43,2,21,7,88,9,0,-4,19,3,6];

function merge(left,right) {
  let result = [];
  while(left.length>0 && right.length>0) {
    if(left[0]<right[0]) {
      result.push(left.shift());
    }else {
      result.push(right.shift());
    }
  }
  if(left.length) result.push(left.shift());
  if(right.length) result.push(right.shift());

  return result;
}

function mergeSort(arr) {
  if(arr.length <2 ) {
    return arr;
  }
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left),mergeSort(right))
}

console.log(mergeSort(data))