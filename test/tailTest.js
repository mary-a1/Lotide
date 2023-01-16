const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  
  it("#1 returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("#2 returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("#3 returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']",() => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it ("#4 it returns 3 elements for array of 3 elements", ()=>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); 
    assert.equal(words.length, 3); 
  });

});