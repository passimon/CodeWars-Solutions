function toCamelCase(str){
 const newStr = str.split("");
 let container = [];
 
 for (i=0; i<newStr.length; i++) {
   if (newStr[i-1] === "_" || newStr[i-1] === "-") {
     container.push(newStr[i].toUpperCase())
   } else container.push(newStr[i])
 }
return container.toString().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
}
