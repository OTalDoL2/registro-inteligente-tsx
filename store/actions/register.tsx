import { REGISTER, } from '../types';

const setRegister = (payload: number) => ({
    type: REGISTER,
    payload,
  });
  
  export default {
    setRegister,
  };