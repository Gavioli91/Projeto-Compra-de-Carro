const fetchProducts = () => {
  // seu código aqui
  const site = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  fetch(site)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Falhou \n${error}`))
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
