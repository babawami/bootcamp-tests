describe('countRegNumber', function(){

  it('returns the number of registration numbers in the string', function(){
    assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), 3);
  });
  it('returns the number of registration numbers in the string', function(){
    assert.equal(countRegNumber("182736 CZ,CY 523519 GP,CJ 812328"), 3);
  });

});
