describe("findItemsOver",function(){
  it("the function should return products that have quantity higher than the threshold.", function(){
    assert.deepEqual(findItemsOver([{name:"apples", "qty":40} , {name: "bananas", qty: 23},],20), [{"name":"apples", "qty": 40}, {"name":"bananas","qty":23},])
  });
  it("the function should not return products that have quantity lower than the threshold.", function(){
    assert.deepEqual(findItemsOver([{name:"apples", "qty":15} , {name: "bananas", qty:19 },],20), [])
  });
});
