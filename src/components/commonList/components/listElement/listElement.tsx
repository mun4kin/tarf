import React from 'react';
import { IProduct } from 'types/products.types';
import { MenuHorizontal } from 'juicyfront';
import './listElement.scss';


interface IListElement {
  type: 'product' | 'tariff';
  element: IProduct;
}

export const ListElement: React.FC<IListElement> = ({ type, element }) => {
  return(
    <div className="list-element__wrapper">
      <button className="list-element__btn">
        <span className="list-element__productLine">{element.productLine[0].productLine}</span>
        <span>{element.productGroup[0].productGroup}</span>
        <span>{element.productGroup[0].groupCode}</span>
        <span>{element.productName}</span>
        <span>{element.productOwner[0].productOwner}</span>
        <span>{new Date(element.startDate).toLocaleDateString()}-{new Date(element.endDate).toLocaleDateString()}</span>
        <span>{element.productStatus[0].productStatusName}</span>
      </button>
      <button>
        <div className="dots-icon">
          <MenuHorizontal />
        </div>
      </button>
    </div>
  );
};
