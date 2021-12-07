import axios from 'axios';
import { IProduct } from 'types/products.types';

export const getProducts = (): Promise<IProduct[]> => {
  const path = `${process.env.REACT_APP_BASE_URL}/products`;

  return axios.get(path).then((data) => {
    return data.data;
  }).catch((error: any) => {
    throw error
  })
};
