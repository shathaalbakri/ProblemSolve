function countEqualSubstrings(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let substring = s.substring(i, j);
        let lowercaseCount = 0;
        let uppercaseCount = 0;
        for (let k = 0; k < substring.length; k++) {
          if (substring[k] >= 'a' && substring[k] <= 'z') {
            lowercaseCount++;
          } else if (substring[k] >= 'A' && substring[k] <= 'Z') {
            uppercaseCount++;
          }
        }
        if (lowercaseCount === uppercaseCount) {
          count++;
        }
      }
    }
    return count;
  }
  
  const s = "women's day";
  const result = countEqualSubstrings(s);
  console.log(result);