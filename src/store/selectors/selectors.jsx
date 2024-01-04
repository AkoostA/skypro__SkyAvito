const mainSelector = (store) => store.store;

export default mainSelector;

export const userSelector = (store) => mainSelector(store).user;
export const tokenSelector = (store) => mainSelector(store).token;
export const searchSelector = (store) => mainSelector(store).search;
export const productSelector = (store) => mainSelector(store).product;
export const productsSelector = (store) => mainSelector(store).products;
