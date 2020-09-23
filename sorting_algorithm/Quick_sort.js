/**
 * @param {number[]} arr
 * @return {number[]}
 */

const data = [1,7,8,43,2,21,7,88,9,0,-4,19,3,6];

//非原地查询(最好懂)

function quickSort1(arr) {
  if( arr.length<=1 ) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length/2);
  const pivot = arr.splice(pivotIndex,1)[0];
  let left = [] ,right = [];
  for(let i = 0 ; i<arr.length ; i++) {
    if(arr[i]<pivot) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return quickSort1(left).concat(pivot,quickSort1(right))
}

console.log(quickSort1(data))

//快速三排法

quickSort2 = arr => arr.length > 1?[
  ...quickSort2(arr.filter(x=>x<arr[0])),
  ...arr.filter(x=>x===arr[0]),
  ...quickSort2(arr.filter(x=>x>arr[0]))
]:arr

console.log(quickSort2(data))


//排序且去重

function quickSort3(arr) {
  if(arr.length == 0) {return []};
  const pivot = arr[0];

  let lower = arr.filter(x => x<pivot);
  lower = quickSort3(lower);

  let higher = arr.filter(x => x>pivot);
  higher = quickSort3(higher);

  return lower.concat(pivot,higher);
}

console.log(quickSort3(data))

//中高级写法

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}


/**
 * 第一种写法
 */

function quickSort4(arr,left,right){
  let len = arr.length;
  left = left!==undefined ? left:0;
  right = right!==undefined ? right:len-1;
  // 递归，终止条件是left>=right
  if(left<right){
      let index = sortAndFindIndex(arr,left,right);
      quickSort4(arr,left,index-1);
      quickSort4(arr,index+1,right)
  }
  return arr 
}

function sortAndFindIndex(arr,left,right){
  // 获取当前基准点索引对应的值
 const baseValue = arr[left];
 let index = left+1;
 for(let i =index;i<=right;i++){
   if(baseValue>arr[i]){
     swap(arr,index,i)
     index++
    }
  }
  // -1是因为最后依次符合条件的i加1了
  swap(arr,index-1,left);
  return index-1
}

console.log(quickSort4(data))


/**
 * 第二种写法
 */

function quickSort5(items, left, right) {
  var index;
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort5(items, left, index - 1);
    }
    if (index < right) {
      quickSort5(items, index, right);
    }
  }
  return items;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
  i = left,
  j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

console.log(quickSort5(data))