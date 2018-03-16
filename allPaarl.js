function allPaarl( platenum){
var finish =[];          // emtpy array
var platesplit = platenum.split(", ");    // split string into array
for ( var i = 0; i < platesplit.length ; i++){
var cjplate = platesplit[i];     // access array and list
    //console.log(cjplate);
    //check if the plate start with 'CJ'
if ( cjplate.startsWith("CJ")){
     // add plate starting with 'CJ' to the list
     finish.push(cjplate)
    //console.log(cjplate);
    }
       }
  return finish;
}
