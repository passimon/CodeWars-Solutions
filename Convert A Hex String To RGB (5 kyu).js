function hexStringToRGB(hexString) {
var r = parseInt(hexString[1] + hexString[2], 16);
var g = parseInt(hexString[3] + hexString[4], 16);
var b = parseInt(hexString[5] + hexString[6], 16);
  
  return {r, g, b}
}
