function createPhoneNumber(numbers){
  let newNum = ["("];
  for (i=0; i<numbers.length; i++) {
    newNum.push(numbers[i]);
    if (i === 2) {
       newNum.push(")");
       newNum.push(" ");    
    };
    if (i === 5) {
      newNum.push("-");
    }
  }
  return newNum.toString().replace(/[,]+/g, "");
}
