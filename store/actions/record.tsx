import { RECORD } from '../types';

const setRecord = (payload: any) => ({
    type: RECORD.ADD,
    payload,
});

const readRecords = () => ({
    type: RECORD.READ,
});

export default {
    setRecord,
    readRecords
};