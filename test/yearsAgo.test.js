describe('yearsAgo',function(){
  it('return how many years ago from current year minus year captured. ', function(){
    assert.equal(yearsAgo("2006"),12);
  });
  it( 'It should not take anything besides year captured', function(){
    assert.equal(yearsAgo("1988"),30);
  });
});
