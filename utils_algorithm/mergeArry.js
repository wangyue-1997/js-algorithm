/**
 * 合并数组
 * @param {*} arr 
 */

const arr = [
  {id:10,name:'aaa',age:'18'},
  {id:20,name:'bbb',age:'19'},
  {id:30,name:'ccc',age:'20'},
  {id:40,name:'aaa',age:'21'},
]

function mergeArry (arr) {
  let newData = {}
  arr.forEach( item => {
    if(Object.keys(newData).indexOf(item.name) === -1) {
      newData[item.name] = []
    }
    newData[item.name].push(item)
  });
  return newData
}

console.log(mergeArry(arr))