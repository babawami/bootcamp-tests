function totalPhoneBill (bill){
//console.log(bill);
 var callbill = 0;
 var smsbill = 0;
 var totalbill = 0;
 var billsplit = bill.split(",");          // convert string into array
 for ( var i = 0; i<billsplit.length;i++){     // loop
   var bills = billsplit[i].trim();        // to align the indexs
   if( bills.startsWith("call")){              // filter search
   callbill = callbill + 2.75;                //
   }
   else if ( bills.startsWith("sms")){       //  filter search
   smsbill = smsbill + 0.65;                   // to count all the sms
   }
 }
 totalbill = smsbill + callbill;
  return "R" + totalbill.toFixed(2);
}
