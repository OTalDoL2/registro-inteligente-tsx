import { createStore} from 'redux';
import appReducer from './reducers';

type AppState = ReturnType<typeof appReducer>;

export default createStore(appReducer);