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

  it.skip('should sort trinkets in alphabetical order', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 'silver', 'platinum', 'bronze']});
    assert.deepEqual(mermaid.organize(), ['bronze', 'gold', 'platinum', 'silver'])
  });
  
  it.skip('should clean out any trinkets that are not strings', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 55, 'platinum', true]});
    assert.deepEqual(mermaid.cleanTrinkets(), ['gold', 'platinum']);
  });

  it.skip('should show a love for trinkets', function() {
    var mermaid = new Mermaid({name: 'Beatrice', trinkets: ['gold', 'silver', 'platinum', 'bronze']});
    assert.equal(mermaid.buildSong(),'I love bronze,I love platinum,I love silver,I love gold')
  });

});

