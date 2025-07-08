function solution(list){
 let stringList = ''
 let container = []
  
 for (i = 0; i < list.length; i++) {
   if (container.length === 0) {
     container.push(list[i]);
   } else if (list[i] === (container[container.length-1] +1)) {
     container.push(list[i]);
   } else {
     if (container.length > 2) {
       let str = container[0] + '-' + container[container.length-1] + ','
       stringList += str;
     } else {
       stringList += container.join(',') + ',';
     }
     container =[];
     container.push(list[i]);
   }
 }
      if (container.length > 2) {
       var str = container[0] + '-' + container[container.length-1];
       stringList += str;
     } else {
       stringList += container.join(',');
     }
 return stringList;
}
