import TaskStore from './TaskStore';

interface StoreContext {
    taskStore: typeof TaskStore.Type;
}

export const storeContext = React.createContext<StoreContext | null>(null);

export const useStore = (): StoreContext => {
    const store = React.useContext(storeContext);
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.');
    }
    return store;
};

