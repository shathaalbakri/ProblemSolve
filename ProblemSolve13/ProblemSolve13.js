function findDistinctSums(nums) {
  let distinctSums = new Set();
 
  function generateSubsets(index, currentSum) {
    if (index === nums.length) {
      distinctSums.add(currentSum);
      return;
    }
    generateSubsets(index + 1, currentSum + nums[index]); 
    generateSubsets(index + 1, currentSum); 
  }
  generateSubsets(0, 0);
  return Array.from(distinctSums);
 }
 let nums = [1,2];
 let distinctSums = findDistinctSums(nums);
 console.log(distinctSums); 