function findItemsOver20(products){
  //console.log(products);
  var elite = [];
  for (var i = 0; i<products.length; i++){
    var breakdown = products[i];
   //console.log(breakdown);
    if(breakdown.qty> 20){
      elite.push(breakdown);
      //console.log(elite)
    }
    }
  return elite;
}
