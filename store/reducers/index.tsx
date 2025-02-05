import { combineReducers } from 'redux';
import register from './register';


const appReducer = combineReducers({
    register,
});

export default appReducer;

// export type State = ReturnType<typeof appReducer>