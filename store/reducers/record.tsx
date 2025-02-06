import { RECORD } from '../types';

const initialstate = {
    record: [],
};

type Action = {
    type: string,
    payload?: any
}

const record = (state: any = initialstate, action: Action) => {
    console.log(action)
    console.log('aqui, ' + action.type)
    switch (action.type) {
        case RECORD.ADD:
            return Object.assign({}, state, {
                record: action.payload,
            });
        case RECORD.READ:
            return state;

        case RECORD.UPDATE:
            return {
                ...state,
                registro: state.registro.map((item: any) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };

        case RECORD.DELETE:
            return {
                ...state,
                registro: state.registro.filter((item: any) => item.id !== action.payload.id),
            };

        default:
            console.log('entrou errado')
            return state;
    }
};

export default record