function countAllPaarl(platenum){
var addcj = []; // emtpy array
  var platesplit = platenum.split(","); // convert string into array
  //console.log(platesplit);
  for (  var i = 0; i< platesplit.length; i++){
  var allcj = platesplit[i].trim();  // align the list
    //console.log(allcj);
 // console.log( "|" + allcj + "|"); // to see if the list is aligned
   if(allcj.startsWith("CJ")){
     addcj.push(allcj);
       console.log(allcj.length);
      }
    }
  return addcj.length;
}
   
