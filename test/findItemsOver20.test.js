describe("findItemsOver20", function(){
  it("return only items with quantiy over 20",function(){
    assert.deepEqual(findItemsOver20([{name:"apples", qty:10}, {name:"pears",qty:37}, {name:"bananas",qty:27}, ]), [{"name": "pears","qty": 37}, {"name":"bananas","qty":27}, ])
  });
  it(" no items with quantiy over 20",function(){
    assert.deepEqual(findItemsOver20([{name:"apples", qty:10}, {name:"pears",qty:15}, {name:"bananas",qty:15}, ]), [  ])
  });
});
