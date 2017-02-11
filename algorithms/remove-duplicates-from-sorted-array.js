/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = 0;
  for (let i = nums.length; i--; ) {
    if (i === nums.length - 1)
      len++
    else if (nums[i] === nums[i + 1])
      nums.splice(i, 1)
    else 
      len++
  }
  return len
};

console.log(removeDuplicates([1,1,3]))