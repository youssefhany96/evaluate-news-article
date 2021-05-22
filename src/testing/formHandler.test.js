import { handleSubmit } from "../client/js/formHandler";

describe("Testing the existing of the submit", () => {
  test("Testing the handleSubmit() function is defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
describe("Testing the functionality of the url", () => {
    test("Testing the handleSubmit() to be a function", () => {
      expect(handleSubmit).toBe('function');
    });  
});  