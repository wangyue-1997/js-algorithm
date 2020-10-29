/**
 * 数组的最大值或最小值
 * @param {*} arr 
 */

const arr = [
  {id:10,name:'aaa',age:'18'},
  {id:20,name:'bbb',age:'19'},
  {id:30,name:'ccc',age:'20'},
  {id:40,name:'aaa',age:'21'},
]

function min (arr) {
  return Math.min.apply(null, arr.map(item => {
    return item.age
  }))
}

function min1 (arr) {
  return Math.min(...arr.map(item => {
    return item.age
  }))
}

function max (arr) {
  return Math.max.apply(null, arr.map(item => {
    return item.age
  }))
}

console.log(min1(arr))
console.log(min(arr))
console.log(max(arr))