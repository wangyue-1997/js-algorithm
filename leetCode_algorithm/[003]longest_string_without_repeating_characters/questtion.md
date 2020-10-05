给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。


*实列1：*
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

*实列2：*
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

*实列3：*
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

*解法：*
- [slide_window(双指针)](https://github.com/wangyue-1997/js-algorithm/blob/master/leetCode_algorithm/[003]longest_string_without_repeating_characters/slide_window)