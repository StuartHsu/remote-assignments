function twoSum(nums, target){
  var indices;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && !indices) {
        indices = [i, j];
      }
    }
  }
  if (indices) {
    console.log(indices);
  } else {
    console.log("There is no match result, please change your input.");
  }
}

twoSum([2, 7, 11, 15], 9);

/*
  For example:
    twoSum([2, 7, 11, 15], 9);
  Should returns:
    [0, 1]
  Because:
    nums[0]+nums[1] is 9
*/
