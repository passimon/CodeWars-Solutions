function getCount(str) {
  let splStr = str.split('')
  let count = 0
  for (i=0; i<splStr.length; i++){
    if (splStr[i] == 'a' || splStr[i] == 'e' || splStr[i] =='i' || splStr[i] == 'o'|| splStr[i] == 'u')
   {count++}
    }
  return count
    
}
