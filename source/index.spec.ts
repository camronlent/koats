import { expect } from "chai";
import { test } from ".";

describe("dummy", () => {
  it("should run dummy", () => {
    expect(test()).to.equal("test");
  });
});
