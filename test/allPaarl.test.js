describe("allPaarl",function(){
  it("returns all the reg numbers for Paarl",function(){
    assert.deepEqual(allPaarl("CJ 564, CA 856, CJ 789, CN 963"), [ "CJ 564", "CJ 789"]);
  });
  it(" fails to return all the reg numbers for Paarl",function(){
    assert.deepEqual(allPaarl("CB 564, CA 856, CG 789, CN 963"), []);
  });
});
