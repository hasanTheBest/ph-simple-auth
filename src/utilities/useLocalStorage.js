// Get Item from local storage
const getItems = (name) =>
  localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : null;

// Set item to local storage
const setItem = (name, value) => {
  let cart = {};
  if (getItems(name)) {
    cart = getItems(name);
    if (getItems(name)[value]) {
      cart[value] += 1;
    } else {
      cart[value] = 1;
    }
  } else {
    cart[value] = 1;
  }

  localStorage.setItem(name, JSON.stringify(cart));
};

export { getItems, setItem };
