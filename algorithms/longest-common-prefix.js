/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const min = strs.reduce(function(pre, item) {
    return Math.min(pre, item.length);
  }, Number.MAX_VALUE);

  let result = ''
  for(let i=0;i<min;i++) {
    const char = strs[0][i]
    const equal = strs.every( item => {
      return item[i] == char
    })
    if(!equal)  break
    result += char
  }

  return result

};



console.log(longestCommonPrefix(['abcdef', 'abcde', 'abcdk', 'abc']))

