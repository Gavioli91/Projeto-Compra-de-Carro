const fetchProducts = async (product) => {
  try {
  const site = `https://api.mercadolibre.com/sites/MLB/search?q=computador=${product}`;
    const productFetch = await fetch(site);
    const response = await productFetch.json();
    return response;
    } catch (error) {
     return new Error('You must provide an url');
    }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('Assus');