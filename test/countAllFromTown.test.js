describe('countAllFromTown', function(){
  it('return number registration numbers  that is for Stellies.',function(){
    assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341','CL') , 3)
  });
  it('return number reg numbers that is for Bellville starts with CJ not ending with CJ.',function(){
    assert.equal(countAllFromTown(' 124 CJ,  567 CJ,  345 CL, CJ 456, CL 341','CJ') , 1)
  });
});
