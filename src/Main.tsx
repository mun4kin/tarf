import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { IUser } from './types/user.types';
import singleSpaReact from 'single-spa-react';
import { store } from './store';
import { userFixtures } from './fixtures/user';

interface IProps {
  user?: IUser;
  completeTask?: (id: string) => void;
  basename?: string;
  place?: string;
}

const Main:React.FC<IProps> = ({ basename }:IProps) => {
  return (<Provider store={store}><App user={userFixtures}/></Provider>);
};

export default Main;

// todo: для встройки в портал как микрофронтенд (доработать):
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Main,
  domElementGetter: ({ place = 'container' }:IProps) => {
    let div = document.getElementById(place);

    if (!div) {
      div = document.createElement('div');
      div.id = place;
    }

    return div;
  },
  // TODO: добавить обработку ошибок
  // errorBoundary(err, info, props) {
  //   console.log('---------------');
  //   console.log(err);
  //   console.log(info);
  //   console.log(props);
  //   console.log('---------------');
    // https://reactjs.org/docs/error-boundaries.html
    // return <FatalError/>;
  // }
});
export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
