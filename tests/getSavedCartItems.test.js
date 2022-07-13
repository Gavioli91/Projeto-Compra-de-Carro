const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('est if, when executing saveCartItems with the <ol><li>Item</li></ol> argument, the localStorage.setItem method is "called"', () => {
    expect.assertions(1);
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  
  it('Test if, when executing saveCartItems with the <ol><li>Item</li></ol> argument, the localStorage.setItem method is called with two parameters, the first being "cartItems" and the second being the value passed as argument to saveCartItems', () => {
    expect.assertions(1);
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
