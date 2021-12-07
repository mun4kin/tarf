import axios from 'axios';
import { IProduct } from 'types/products.types';

export const postProduct = (product: IProduct) => {
  if (product === null) {
    throw new Error('Required parameter product was null or undefined when calling addProduct.');
  }
  const path = `${process.env.REACT_APP_BASE_URL}/products`;

  return axios.post(path, product).then((data) => {
    return data.data;
  }).catch((error: any) => {
    throw error
  })
};
