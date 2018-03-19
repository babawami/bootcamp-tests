function mostProfitableDepartment(money){
var min = money[0].sales;    // printout value of 1st sales index
 var profit= money[0].department;
for ( var i=0;i<money.length;i++){
var result = money[i];
if(result.sales> min){
min = result.sales;
profit = result.department
//console.log(profit);
}
}
 return profit;
}
