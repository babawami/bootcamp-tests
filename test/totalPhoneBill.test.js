describe("totalPhoneBill", function(){
  it("Calculate the total bill of calls.",function(){
    assert.equal(totalPhoneBill("calls, calls, calls, calls, commit"), "R11.00")
  });

  it("Calculate the total bill of sms.",function(){
    assert.equal(totalPhoneBill("sms, sms, sms, sms, sell ,"), "R2.60")
  });

  it("Calculate the total phone bill.",function(){
    assert.equal(totalPhoneBill("sms, sms, calls, calls, sell, commit"), "R6.80")
  });

});
