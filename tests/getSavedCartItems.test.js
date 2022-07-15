const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Test if, when executing getSavedCartItems, the localStorage.getItem method is called', () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
});

it('Test if, when executing getSavedCartItems, the localStorage.getItem method is called with "cartItems" as a parameter', () => {
  getSavedCartItems();
  expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
});
});
