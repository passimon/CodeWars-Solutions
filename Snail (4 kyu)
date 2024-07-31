snail = function(array) {
  let container = [];
  while (array.length) {
    container.push(...array.shift())
    for (i=0; i<array.length; i++) {
      container.push(array[i].pop())
    }
    container.push(...(array.pop() || []).reverse())
    for (i = array.length-1; i>=0; i--) {
      container.push(array[i].shift())
    }
  }
  return container
}
