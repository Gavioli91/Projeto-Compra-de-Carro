const createProductImageElement = (imageSource) => {
    const img = document.createElement('img');
    img.className = 'item__image';
    img.src = imageSource;
    return img;
};

const createCustomElement = (element, className, innerText) => {
    const e = document.createElement(element);
    e.className = className;
    e.innerText = innerText;
    return e;
};

const createProductItemElement = ({ sku, name, image }) => {
    const section = document.createElement('section');
    section.className = 'item';

    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(image));
    section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

    return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
    const removeOfToLittleCart = event.target.parentNode;
    removeOfToLittleCart.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    li.addEventListener('click', cartItemClickListener);
    return li;
};

const createItemList = async () => {
    const newProduct = document.querySelector('.items');
    const carregando = document.createElement('div');
    carregando.className = 'loading';
    carregando.innerHTML = 'carregando';
    newProduct.appendChild(carregando);
    const { results } = await fetchProducts('computador');
    newProduct.innerHTML = '';
    results.forEach(({ id: sku, title: name, thumbnail: image }) => {
        newProduct.appendChild(createProductItemElement({ sku, name, image }));
    });
};

const addLittleCart = async (item) => {
    const cartItems = document.querySelector('.cart__items');
    const list = getSkuFromProductItem(item.target.parentElement);
    const { id: sku, title: name, price: salePrice } = await fetchItem(list);
    cartItems.appendChild(createCartItemElement({ sku, name, salePrice }));
};

const itemListener = async () => {
    await createItemList();
    const buttonAddNewItem = document.querySelectorAll('.item__add');
    buttonAddNewItem.forEach((button) => {
        button.addEventListener('click', addLittleCart);
    });
};

itemListener();

const cleanLittleCart = document.querySelector('.cart__items');
const cleanButton = document.querySelector('.empty-cart');
const emptyCart = () => {
  cleanLittleCart.innerHTML = '';
};

cleanButton.addEventListener('click', emptyCart);

window.onload = () => { };