/**
 * 
 * @param {*} target 
 */

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}

function deepClone (target) {
  let result,type = checkType(target);
  if( type==='Object') {
    result = {}
  }else if( type === 'Array') {
    result = []
  }else {
    return result
  }

  for(let i in target) {
    let value = target[i];
    let valueType = checkType(value);
    if(valueType === 'Object' || valueType === 'Array') {
      result[i] = deepClone(value)
    }else {
      result[i] = value
    }
  }
  return result
}

const obj = {
  a:'aaa',
  b:{b:{i:'ss'}}
}


const newObj = deepClone(obj)

newObj.b.b.i = 'aa'

console.log(obj)    // { a: 'aaa', b: { b: { i: 'ss' } } }
console.log(newObj) // { a: 'aaa', b: { b: { i: 'aa' } } }