import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IUserState } from 'store/rootReducer';
import { getProducts } from 'api/products/getProducts';
import { postProduct } from 'api/products/postProduct';
import { deleteProduct } from 'api/products/deleteProduct';
import { IProduct } from 'types/products.types';
import './commonList.scss';
import { ListElement } from './components/listElement/listElement';

export const CommonList: React.FC<any> = function (props) {
  const user = useSelector((state: { user: IUserState }) => state.user.user);

  const [products, setProducts] = useState<IProduct[]|[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handleAddProduct = () => {
    console.log('add product');
    postProduct({ id: '3' } as IProduct);
  };

  const handleDeleteProduct = () => {
    console.log('delete product');
    deleteProduct('3');
  };

  return (
    <div className='test'>
      <button onClick={handleAddProduct}>Add product</button>
      <br />
      <button onClick={handleDeleteProduct}>Delete product</button>
      <h2>User:</h2>
      {
        user && (
        <span>
          {user.id}
          {' '}
          {user.fullName}
        </span>
        )
      }
      <h2>Products:</h2>
      <ul>
        {
          products.length && products.map((prod) => (
            <li key={prod.id} className="list__li">
              <ListElement
                type="product"
                element={prod}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
