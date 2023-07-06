import React from 'react';
import { AppProps } from 'next/app';
import { storeContext } from '../store/storeContext';
import { useLocalStore } from 'mobx-react-lite';
import { TaskStore, Task } from '../store/TaskStore';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store = useLocalStore(() => ({
    taskStore: TaskStore.create({
      tasks: [],
    }),
  }));

  return (
    <storeContext.Provider value={store}>
      <Component {...pageProps} />
    </storeContext.Provider>
  );
};

export default MyApp;
