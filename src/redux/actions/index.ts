// Coloque aqui suas actions
import { Dispatch } from '../../types';
import { DELETE_EXPENSE, REQUEST_FAILED, SET_CURRENCIES_IN_SELECT,
  SET_EMAIL,
  SET_EXPENSE } from './actionTypes';

export const setEmail = (userEmail: string) => ({
  type: SET_EMAIL,
  payload: userEmail,
});

export const currenciesAction = (currencies: string[]) => ({
  type: SET_CURRENCIES_IN_SELECT,
  payload: currencies,
});

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export const setNewExpense = (expenses: any) => ({
  type: SET_EXPENSE,
  payload: expenses,

});

export const deleteExpense = (actualExpense: number) => ({
  type: DELETE_EXPENSE,
  payload: actualExpense,
});

export function fetchCurrenciesAPI() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      if ('USDT' in data) {
        delete data.USDT;
      }
      const currencies = Object.keys(data);
      dispatch(currenciesAction(currencies));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
}
