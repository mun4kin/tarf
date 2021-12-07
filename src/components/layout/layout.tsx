import React from 'react';
import './layout.scss';

export const Layout: React.FC = (props) => {
  return(<div className="container">{props.children}</div>);
};
