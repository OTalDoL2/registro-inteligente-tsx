import { RECORD } from '../types';

const setRecord = (payload: any) => ({
    type: RECORD.ADD,
    payload,
});

const updateRecord = (payload: any) => ({
    type: RECORD.UPDATE,
    payload,
});

const removeRecord = (payload: any) => ({
    type: RECORD.REMOVE,
    payload,
});

const readRecords = () => ({
    type: RECORD.READ,
});

export default {
    setRecord,
    updateRecord,
    readRecords,
    removeRecord
};