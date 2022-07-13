require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Should be a function', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  it('un fetchItem function with item argument "MLB1615760527" and test if fetch was called', () => {
    expect.assertions(1);
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Test if, when calling the fetchItem function with the item argument "MLB1615760527", the fetch function uses the endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    expect.assertions(1);  
    await fetchItem('MLB1615760527');
    const site = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(site);
  });

  it('Test if the fetchItem function return with the item argument "MLB1615760527" is a data structure equal to the item object that is already imported in the file', async () => {
    expect.assertions(1);
    const newVar = await fetchItem('MLB1615760527');
    expect(newVar).toEqual(item);
  });
  
  it('Test if calling the fetchItem function with no argument returns an error with the message: "You must provide an url"', async () => {
    expect.assertions(1);
    const expected = new Error('You must provide an url');
    expect(await fetchItem()).toEqual(expected);
  });
});
