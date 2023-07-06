import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'mobx-react-lite';
import TaskStore from '../store/TaskStore';

const taskStore = TaskStore.create({
  tasks: [],
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider taskStore={taskStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
