import { should } from "chai";

should();

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const pageTitle = await browser.getTitle();
    const header = element(by.css("h1"));

    pageTitle.should.eql("Sandbox");

    const title = await header.getText();
    title.should.eql("Sandbox");
  });
}).timeout(20000);
