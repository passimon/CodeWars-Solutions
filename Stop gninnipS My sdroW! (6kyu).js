function spinWords(string){
  const splitString = string.split(/[ ]+/).filter(Boolean)
  let container = []
  for (i=0; i<splitString.length; i++) {
      if (splitString[i].length > 4) {
        container.push(splitString[i].split('').reverse().join().replaceAll(',', ''));
      } else container.push(splitString[i])
    }
  return container.toString().replaceAll(",", " ")

}
