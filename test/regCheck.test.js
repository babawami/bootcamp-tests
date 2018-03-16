describe('regCheck', function(){
  it('check registration number by province reg plates.', function(){
      assert.equal(regCheck('DV 23 LP MP', 'MP'), true);
  });
  it('Failed to check registration number by province reg plates.', function(){
      assert.equal(regCheck('DV 23 LP 23', 'MP'), false);
  });
});
