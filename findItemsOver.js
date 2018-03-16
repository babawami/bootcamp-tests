function findItemsOver(product,threshold){
//console.log(threshold);
  var exculsive = [];
 for( var i=0;i<product.length;i++){
   var listit = product[i];
   console.log(listit)
 if( listit.qty> threshold){
 exculsive.push(listit)
   //console.log(exculsive)
 }
 }
  return exculsive;
}
