const mainSelector = (store) => store.store;

export default mainSelector;

export const userSelector = (store) => mainSelector(store).user;
export const productsSelector = (store) => mainSelector(store).products;
