const fetchItem = async (item) => {
  try {
    if (!item) throw new Error('You must provide an url');
    const site = `https://api.mercadolibre.com/items/MLB1615760527=${item}`;
    const answer = await fetch(site)
    .then((response) => response.json())
    .then((obj) => obj);
    return answer;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
