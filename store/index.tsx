import { createStore} from 'redux';
import appReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export type AppState = ReturnType<typeof appReducer>;
// export type RootState = ReturnType<typeof store.getState>;


// export default createStore(appReducer);4




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
