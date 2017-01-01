/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman = {}
  roman["I"] = 1
  roman["X"] = 10
  roman["C"] = 100
  roman["M"] = 1000
  roman["V"] = 5
  roman["L"] = 50
  roman["D"] = 500

  let sum = 0
  for(let i=0,l=s.length;i<l;i++){
    let num = roman[s[i]]
    let next = i+1 === l ? 0 : roman[s[i+1]]
    if(next > num) {
      sum += next - num
      i++ 
    }else {
      sum += num
    }
  }

  return sum;
};

// console.log(romanToInt("MDCXXI"))  //1621
console.log(romanToInt("MMCXXI"))  //2621