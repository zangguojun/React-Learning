var nextGreaterElements = function(nums) {
  const n = nums.length;
  const ret = new Array(n).fill(-1);
  const stk = [];
  for (let i = 0; i < n * 2 - 1; i++) {
      while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
          console.log(stk[stk.length - 1])
          ret[stk[stk.length - 1]] = nums[i % n];
          stk.pop();
          console.log(ret)
      }
      stk.push(i % n);
  }
  return ret;
};
nextGreaterElements([1,2,1])