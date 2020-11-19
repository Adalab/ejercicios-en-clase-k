'use strict';

const getUsersFromApi = () => {
  console.log('get users from api');
};

const getOrdersFromApi = () => {
  console.log('get orders from api');
};

const caclTaxes = () => {
  console.log('taxes');
};

export default {
  getUsersFromApi,
  getOrdersFromApi,
  taxes: {
    spain: 21,
    france: 25
  }
};

const getProductsFromApi = () => {
  console.log('get products from api');
};

export { getProductsFromApi };

// export default {
//   getUsersFromApi,
//   getOrdersFromApi
// };

const userName = 'Maricarmen';

// esto es lo mismo
const obj = {
  userName: userName
};

const obj2 = {
  userName
};

// esto es diferente

const obj3 = {
  name: userName
};
