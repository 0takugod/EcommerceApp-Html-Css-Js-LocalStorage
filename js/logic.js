const checkFormData = (name, price, category, image) => {
  let isValid = false;
  if (name === "" || price === "" || category === "" || image === "") {
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
};

if (typeof module !== "undefined") {
  module.exports = {
    checkFormData,
  };
}
