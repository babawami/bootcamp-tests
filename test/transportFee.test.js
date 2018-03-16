describe("transportFee",function(){
  it("return amount of R20 if it is morning", function(){
    assert.equal(transportFee("morning"),"R20")
  });

  it("return amount of R10 if it is afternoon", function(){
    assert.equal(transportFee("afternoon"),"R10")
  });

  it("return  free if it is not morning or afternoon", function(){
    assert.equal(transportFee("night"),"free")
  });



});
