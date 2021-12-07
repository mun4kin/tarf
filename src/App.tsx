import * as React from 'react';
import { useEffect } from 'react';
import { IUser } from './types/user.types';
import { store } from './store';
import { USER_UPLOAD } from './store/types';
import { Layout } from 'components/layout/layout';
import { CommonList } from './components/commonList/commonList';

export let basename = '';

interface IProps {
  user?: IUser;
  completeTask?: (id: string) => void
  basename?:string
}

function App(props: IProps) {
  console.warn('================================================================');
  console.log(`%c Тарификатор`, 'color:DodgerBlue;font-size:large');
  console.warn('================================================================');

  basename = props.basename || '';

  /** Получить пользователя */
  useEffect(() => {
    if (props.user) store.dispatch({ type: USER_UPLOAD, payload: props.user });
  }, []);

  return (
    <Layout>
      { /* todo: роутер */ }
      <CommonList />
    </Layout>
  );
}

export default App;
