function generateHashtag (str) {
  const tempStr = str.trim().split('');
  let container = ['#'];
  for (i=0; i<tempStr.length; i++) {
    if (i === 0 || tempStr[i].toLowerCase() != tempStr[i].toUpperCase()) {
      if (tempStr[i-1] === ' ' || i === 0) {
        container.push(tempStr[i].toUpperCase())
      } else container.push(tempStr[i].toLowerCase())
    }
  }
  if (container.length === 1 || container.length > 140) {
    return false
  } else return container.join('').replace(/\s/g, '')
    
}
