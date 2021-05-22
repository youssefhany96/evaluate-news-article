import { checkURL } from "../client/js/URLVerifier";

describe("Testing the functionality of the url", () => {
  test("Testing the checkURL() function is defined", () => {
    expect(checkURL).toBeDefined();
  });
});  