function squareDigits(num){
  let container = [];
  let newNum = num.toString().split('')
  for(i=0; i<newNum.length; i++) {
    container.push(newNum[i]*newNum[i])
  }
  return parseInt(container.join(''))
}
