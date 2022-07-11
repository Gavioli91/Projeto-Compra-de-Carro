require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Should be a function', () => {
    expect(typeof(fetchProducts)).toEqual('function');
  })

  it('Call fetch when "fetchProducts" function is called as a function', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it('Test if the fetchProducts function return with the "computador" argument is a data structure equal to the computerSearch object, which is already imported in the file.', () => {
    fetchProducts('computador');
  })

  it('Test if calling the fetchProducts function with no argument returns an error with the message: "You must provide an url"', () => {
    fetchProducts('');
  })
});
