function solution(number){
  let container = [];
  for (i=0; i<number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      container.push(i)
    }
  }
  return container.reduce((a, b) => a + b, 0)
}
