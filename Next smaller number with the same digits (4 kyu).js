function nextSmaller(n) {
let revStr = n.toString().split('').reverse();
let container = '';
for (i = 0; i < revStr.length; i++) {
    for (j = 0; j < i; j++) {
        if (revStr[j] < revStr[i]) {
            let leftSide = revStr.splice(j, 1);
            let rightSide = revStr.splice(0, i).sort().reverse();
            leftSide = leftSide.concat(rightSide);
            container += revStr.reverse().concat(leftSide).join("")
            return container.length === container.replace(/^0+/, '').length ? container * 1 : -1
        }
    }
}
return -1
}
