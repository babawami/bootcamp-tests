describe("fromWhere", function(){
  it("for CA reg number return Cape Town", function(){
    assert.equal(fromWhere("CA 256"),"Cape Town")
  });

  it("for CY reg number return Bellville", function(){
    assert.equal(fromWhere("CY 256"),"Bellville")
  });

  it("for CJ reg number return Paarl", function(){
    assert.equal(fromWhere("CJ 256"),"Paarl")
  });

  it("return some other place for non CPT, Paarl, Bellville", function(){
    assert.equal(fromWhere("CB 256"),"Some other place!")
  });

});
