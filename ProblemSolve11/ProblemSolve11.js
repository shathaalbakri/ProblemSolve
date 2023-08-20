function longestPalindromicSubstring(s) {
  let longest = '';
 
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substring = s.slice(i, j + 1);
 
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
 
  return longest;
 }
 
 function isPalindrome(s) {
  return s === s.split('').reverse().join('');
 }
 
 const input = 'aaa bb aa';
 const output = longestPalindromicSubstring(input);
 console.log(output);