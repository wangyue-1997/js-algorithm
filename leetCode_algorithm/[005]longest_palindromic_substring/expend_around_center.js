/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  if(s.length < 2) {
      return s;
  }

  let start = 0;
  let maxLength = 1 ;

  function expendAroundCenter(left,right) {
      while(left>=0 && right <s.length && s[left] === s[right]) {
          if(right - left +1 > maxLength) {
              start = left;
              maxLength = right - left + 1;
          }
          left--;
          right++;
      }
  }

  for(var i = 0 ; i<s.length ; i++) {
      expendAroundCenter(i-1,i+1);
      expendAroundCenter(i,i+1);
  }

  return s.substring(start,start+maxLength)
};