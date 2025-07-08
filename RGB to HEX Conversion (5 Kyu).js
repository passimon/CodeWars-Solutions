function rgb(r, g, b) {
  
  function converter(input) {
    if (input > 255) return "FF";
    else if (input < 0) return "00";
    else return input.toString(16).padStart(2, "0").toUpperCase()
  }
return converter(r) + converter(g) + converter(b)
}
