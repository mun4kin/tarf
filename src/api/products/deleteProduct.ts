import axios from 'axios';

export const deleteProduct = (id: string) => {
  if (id === null) {
    throw new Error('Required parameter id was null or undefined when calling deleteProduct.');
  }
  const path = `${process.env.REACT_APP_BASE_URL}/products/${id}`;

  return axios.delete(path).then((data) => {
    return data.data;
  }).catch((error: any) => {
    throw error
  })
};