/**
 * @param {number[]} arr
 * @return {number[]}
 */
 
const data = [1,7,8,43,2,21,7,88,9,0,-4,19,3,6];

function bubbleSort(arr) {
  for(let i = 0 ; i<arr.length - 1; i++) {
    for(let j = 0 ; j<arr.length - i - 1; j++) {
      if(arr[j]>arr[j+1]) {
        const current = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = current;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(data)) //[-4, 0, 1, 2, 3, 6, 7, 7, 8, 9, 19, 21, 43, 88]

let data2 = [
  {name:'aaaa',age:52},
  {name:'bbbb',age:18},
  {name:'cccc',age:32},
];

function bSort(arr) {
  return function(a,b) {
    const aa = a[arr];
    const bb = b[arr];
    return aa - bb;
  }
}

console.log(data2.sort(bSort('age')))