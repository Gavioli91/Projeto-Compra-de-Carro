const saveCartItems = (item) => {
  if (item === undefined) {
    return new Error('Nenhum item foi adicionado');
  }
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
