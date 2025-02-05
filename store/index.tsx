// import { createStore } from "redux";

// import rootReducer from './root-reducer';

// const store = createStore(rootReducer);

// export default store;

import { createStore, applyMiddleware, AnyAction  } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import appReducer from './reducers';

type AppState = ReturnType<typeof appReducer>;

export default createStore(appReducer, applyMiddleware(thunk  as unknown as ThunkMiddleware<AppState, AnyAction>));