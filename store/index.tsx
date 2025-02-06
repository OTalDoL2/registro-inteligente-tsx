import { createStore} from 'redux';
import appReducer from './reducers';

export type AppState = ReturnType<typeof appReducer>;
// export type RootState = ReturnType<typeof store.getState>;


export default createStore(appReducer);