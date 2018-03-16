describe('greet', function(){
  it(' Return hello Andre', function(){
    assert.equal(greet('Andre'), 'Hello, Andre');
  });
  it(' Return hello Yegan', function(){
    assert.equal(greet('Yegan'), 'Hello, Yegan');
  });
});
