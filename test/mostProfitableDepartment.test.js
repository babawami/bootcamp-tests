describe("mostProfitableDepartment", function(){
  it("determine which  department is the most profitable",function(){
    assert.equal(mostProfitableDepartment([{department : 'hardware', sales : 4500},{department : 'outdoor', sales : 1500}]), 'hardware')
  });
});
