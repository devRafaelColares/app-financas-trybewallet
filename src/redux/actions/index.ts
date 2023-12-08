// Coloque aqui suas actions
import { SET_EMAIL } from './actionTypes';

export const setEmail = (userEmail: string) => ({
  type: SET_EMAIL,
  payload: userEmail,
});
