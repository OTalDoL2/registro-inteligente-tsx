import { REGISTER } from '../types';

const initialstate = {
    register: [],
};

type Action = {
    type: string,
    payload?: any
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case REGISTER:
            return Object.assign({}, state, {
                register: action.payload,
            });
        default:
            return state;
    }
};