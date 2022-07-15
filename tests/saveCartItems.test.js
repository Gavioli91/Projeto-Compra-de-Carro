const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Test if, when executing saveCartItems with the <ol><li>Item</li></ol> argument, the localStorage.setItem method is "called"', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  
  it('Test if, when executing saveCartItems with the <ol><li>Item</li></ol> argument, the localStorage.setItem method is called with two parameters, the first being "cartItems" and the second being the value passed as argument to saveCartItems', () => {
    const newVar = ('<ol><li>Item</li></ol>');
    expect.assertions(1);
    saveCartItems(newVar);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', newVar);
  });

  it('Tests if, if no argument is passed, the saveCartItems function returns the error message "Nenhum item foi adicionado"', () => {
    expect(saveCartItems()).toEqual(new Error('Nenhum item foi adicionado'));

  });
});

