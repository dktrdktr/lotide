const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true for ({ a: { y: { k: 1 }, z: 1 }, b: 2 }, { a: { y: { k: 1 }, z: 1 }, b: 2 })", () => {
    assert.strictEqual(
      eqObjects(
        { a: { y: { k: 1 }, z: 1 }, b: 2 },
        { a: { y: { k: 1 }, z: 1 }, b: 2 }
      ),
      true
    );
  });
});
