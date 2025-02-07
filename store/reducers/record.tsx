import AsyncStorage from '@react-native-async-storage/async-storage';
import { RECORD } from '../types';
import Record from '@/interface/Record';


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

        case RECORD.READ:
            return state;

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