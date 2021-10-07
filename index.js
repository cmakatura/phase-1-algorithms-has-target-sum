function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array [j] + array [i] === target) {
        return true; 
        }
      } 
    } return false
  }



/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  iterate through array
  see if current number plus anything else in array equals target
  if it does, return true.. otherwise return false
*/

/*
 I based it off of socks example and finding matching pair but went further with it by adding a target value that they need to add up to.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
