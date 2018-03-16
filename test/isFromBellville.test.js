describe('isFromBellville', function(){
  it('identify the Bellive of vehicle reg numbers.', function(){
    assert.equal(isFromBellville("CY 456"), true);
  });
  it('identify the Non-Bellive of vehicle reg numbers.', function(){
    assert.equal(isFromBellville("CA 456"), false);
  });
});
