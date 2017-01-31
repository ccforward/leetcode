/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  for(let i=0,l=nums.length; i<l; i++) {
    const x = nums.indexOf(target - nums[i])
    if(x>=0 && x!=i){
      return [i, x]
    }
  }
};

var nums = [3,2,4]
var target = 6

console.log(twoSum(nums, target))