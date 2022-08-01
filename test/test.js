const { checkFormData } = require("../js/script");

describe("Test  Check Form Data", () => {
  test("Check Form Data is Valid", () => {
    expect(checkFormData("name", "price", "category", "image")).toBeTruthy();
    expect(checkFormData("name", "price", "category", "")).toBeFalsy();
    expect(checkFormData("name", "price", "", "image")).toBeFalsy();
    expect(checkFormData("name", "", "category", "image")).toBeFalsy();
    expect(checkFormData("", "price", "category", "image")).toBeFalsy();
    expect(checkFormData("", "", "", "")).toBeFalsy();
  });
});
