var assert = require('chai').assert;
var Mermaid = require('./mermaid');

describe('Mermaid', function () {

  it.skip('should have a name', function () {
    var mermaid = new Mermaid({name: 'Louisa'});
    assert.equal(mermaid.name, 'Louisa');
  });

  it.skip('should possess three trinkets by default', function()  {
    var mermaid = new Mermaid({name: 'Robbie'});
    assert.deepEqual(mermaid.trinkets, ['ring', 'necklace', 'diamond']);
  });
  
  it.skip('should supersize trinkets', function() {
    var mermaid = new Mermaid({name: 'Robbie'});
    assert.deepEqual(mermaid.supersize(), ['RING', 'NECKLACE', 'DIAMOND']);
  });

  it.skip('should supersize trinkets in reverse order when it is in the Arctic', function() {
    var mermaid = new Mermaid({name: 'Robbie', trinkets: ['emerald', 'ruby', 'topaz', 'pearl']});
    var ocean = 'Arctic';
    mermaid.swim(ocean);
    assert.equal(mermaid.ocean, 'Arctic');
    assert.deepEqual(mermaid.trinkets, ['PEARL', 'TOPAZ', 'RUBY', 'EMERALD'])
  })
  
  it.skip('should clean out any trinkets that are not strings', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 55, 'platinum', true]});
    assert.deepEqual(mermaid.cleanTrinkets(), ['gold', 'platinum']);
  });

  it.skip('should show a love for trinkets', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 'silver', 'platinum', 'bronze']});
    assert.equal(mermaid.buildSong(),'I love bronze,I love platinum,I love silver,I love gold')
  });

});

