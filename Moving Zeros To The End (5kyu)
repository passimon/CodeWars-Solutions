function moveZeros(arr) {
  let modArr = arr
  let zeroArr = [];
  for (i=0; i<modArr.length; i++) {
    if (modArr[i] === 0) {
      modArr.splice(i, 1);
      zeroArr.push(0);
    }
  }
  for (i=0; i<modArr.length; i++) {
    if (modArr[i] === +0) {
      modArr.splice(i, 1);
      zeroArr.push(+0);
    }
  }
  for (i=0; i<modArr.length; i++) {
    if (modArr[i] === -0) {
      modArr.splice(i, 1);
      zeroArr.push(+0);
    }
  }    
  return modArr.concat(zeroArr)
}
