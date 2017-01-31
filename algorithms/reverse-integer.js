/**
 * @param {number} x
 * @return {number}
 */

// the int32 min: -2^31  max: 2^31-1
var reverse = function(x) {
  const max = (1 << 30) * 2 -1
  const min = - (1 << 30) * 2
  let result
  let arr = []
  arr = x.toString().split('')
  if(x < 0)
    arr.shift()
  result = Number(arr.reverse().join(''))
  if(x < 0)
    result *= -1
  if(result > max || result < min){
    return 0
  }else {
    return result
  }
};

console.log(reverse(234892762))
console.log(reverse(-12345))