var maxSequence = function(arr){
  let maxsum = 0;
  let currsum = 0;
   
  for (i=0; i<arr.length; i++) {
    currsum +=arr[i];
    if (currsum > maxsum) {
      maxsum = currsum;
    }
    if (currsum < 0) {
      currsum = 0
    }
  }
  return maxsum
}
