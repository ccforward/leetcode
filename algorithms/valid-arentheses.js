/**
 * @param {string} s
 * @return {boolean}
 */
// 栈匹配 左括号入栈 右括号出栈
// 最后检查栈是否为空
var isValid = function(s) {
    const charStack = []
    const symbol = {}
    symbol['('] = ')'
    symbol['['] = ']'
    symbol['{'] = '}'

    for(let i=0,l=s.length; i<l; i++) {
     if(!charStack.length){
      charStack.push(s[i])
     }else {
      if(s[i] == symbol[charStack[charStack.length -1]]){
        charStack.pop()
      }else {
        charStack.push(s[i])
      }
     }
    }

    return !charStack.length
};

console.log(isValid('[](){}'))
console.log(isValid('[(){}'))
console.log(isValid('[]({}'))
console.log(isValid('[](){'))