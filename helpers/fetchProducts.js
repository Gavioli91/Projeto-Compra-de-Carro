const fetchProducts = async (query) => {
  const site = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  try {
    const response = await fetch(site);
    const json = await response.json();
    return json;
    } catch (error) {
      return ('You must provide an url');
    }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
