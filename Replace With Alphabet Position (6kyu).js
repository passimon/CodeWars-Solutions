function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const input = text.toLowerCase().replace(/\s/g, '').split('');
  let container = []
  
  function returnPosition(letter) {
    for (i=0; i<alphabet.length; i++) {
      if (alphabet[i] === letter.toString()) {
      container.push(i + 1)
    }
    }
  }
  for (j = 0; j<input.length; j++) {
    returnPosition(input[j])
}
  return container.toString().replaceAll(",", " ")
}
