import { combineReducers } from 'redux';
import record from './record';


const appReducer = combineReducers({
    record,
});

export default appReducer;

// export type State = ReturnType<typeof appReducer>