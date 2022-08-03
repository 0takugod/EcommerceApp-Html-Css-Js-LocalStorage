const { checkFormData, filterProduct } = require("../js/script");

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

describe("Filter Function", () => {
  test("should return array with clothes cateogre products", () => {
    const nameCategory = "clothing";
    let products = [
      {
        id: 1,
        name: "first",
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 2,
        name: "second",
        price: 20,
        category: "Games",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
    ];
    const filteredList = [
      {
        id: 1,
        name: "first",
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
    ];
    expect(filterProduct(nameCategory, products)).toEqual(filteredList);
  });

  test("should return the same array without any change", () => {
    let nameCategory;
    let products = [
      {
        id: 1,
        name: "first",
        price: 10.15,
        category: "clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 2,
        name: "second",
        price: 20,
        category: "Games",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
    ];
    expect(filterProduct(nameCategory, products)).toEqual(products);
  });
});
