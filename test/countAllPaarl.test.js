describe('countAllPaarl',function(){
  it('count only reg number from Paarl',function(){
    assert.equal(countAllPaarl("CB 345 123 , CJ 2345 , CA 123 , CJ 345 123 , CA 123"),2)
  });
  it('count only reg number from Paarl no spaces inbetween letters',function(){
    assert.equal(countAllPaarl("CB345 123 , C J 2345 , CA 123 , CJC 345 123 , CA 123"),1)
  });
});
