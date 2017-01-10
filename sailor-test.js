var assert = require('chai').assert;
var Sailor = require('./sailor');
var Mermaid = require('./mermaid');

describe('Sailor', function () {

  it.skip('should have a name', function () {
    var sailor = new Sailor('Steve');
    assert.equal(sailor.name, 'Steve');
  });

  it.skip('should have an empty bucket by default', function()  {
    var sailor = new Sailor('Bree');
    assert.deepEqual(sailor.bucket, []);
  });

  it.skip('should earn the first of a mermaid\'s trinkets when it sings to her', function() {
    var sailor = new Sailor('Steve');
    var mermaid = new Mermaid({name: 'Brenna'});
    assert.equal(mermaid.name, 'Brenna');
    sailor.sing(mermaid);
    assert.equal(sailor.bucket.length, 1);
    assert.equal(sailor.bucket[0], 'ring');
    assert.equal(mermaid.trinkets[0], 'necklace');
  });

  it.skip('should only have room for three trinkets in its bucket', function() {
    var sailor = new Sailor('Brutus');
    var mermaid = new Mermaid({name: 'Penelope', trinkets: ['ruby', 'pearl', 'emerald', 'topaz']});
    sailor.sing(mermaid);
    sailor.sing(mermaid);
    sailor.sing(mermaid);
    sailor.sing(mermaid);
    assert.equal(sailor.bucket.length, 3);
  });

});
