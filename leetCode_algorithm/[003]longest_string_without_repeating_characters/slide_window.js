/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let i = 0,
      j = 0,
      maxlength = 0;

  if(s.length = 0) {
      return 0;
  }           
  for(i;i<s.length;i++) {
      if(!set.has(s[i])) {
          set.add(s[i])
          maxlength = Math.max(maxlength,set.size)
      }else {
          while(set.has(s[i])){
              set.delete(s[j])
              j++
          }
          set.add(s[i])
      }
  }
  return maxlength
};

