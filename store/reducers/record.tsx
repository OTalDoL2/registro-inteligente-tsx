import { RECORD } from '../types';

interface Record {
    id: string,
    carregamento: string,
    cidade: string,
    valor: string,
    dataEntrega: string,
    observacao: string,

}

interface RecordState {
    records: Record[];
}

const initialstate: RecordState = {
    records: [],
};

type Action = {
    type: string,
    payload?: Record
}

const record = (state = initialstate, action: Action): RecordState => {
    switch (action.type) {
        case RECORD.ADD:
            return {
                ...state,
                records: [...state.records, action.payload!],
            };


        case RECORD.UPDATE:
            return {
                ...state,
                records: state.records.map((item) =>
                    item.id === action.payload?.id ? action.payload : item
                ),
            };

        case RECORD.REMOVE:
            return {
                ...state,
                records: state.records.filter((item) => item.id !== action.payload?.id),
            };

        default:
            return state;
    }
};

export default record