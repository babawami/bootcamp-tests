function countAllFromTown( platenum, place){
var alltown = [];                      // empty array
var platesplit = platenum.split(",");  // convert string into array
 for (  var i = 0; i < platesplit.length; i++){
 var townplate = platesplit[i].trim();               // put array into list
 if ( townplate.startsWith(place)){
  alltown.push(townplate);                          // put filter into array
     }
 }
return alltown.length;
}
