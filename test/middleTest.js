const middle = require('../middle');
const assert = require('chai').assert;

describe("#tail", () => {
  it("#1 returns [2, 3] as the middle for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("#2 returns [3, 4] as the middle for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("#3 returns [3] as the middle for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

