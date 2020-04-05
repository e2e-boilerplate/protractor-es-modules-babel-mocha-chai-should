import { should } from "chai";

should();

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = await element(by.css("h1")).getText();

    title.should.eql("Sandbox");
    header.should.eql("Sandbox");
  });
}).timeout(20000);
