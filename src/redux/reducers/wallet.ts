// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { DELETE_EXPENSE, SET_CURRENCIES_IN_SELECT,
  SET_EXPENSE } from '../actions/actionTypes';
import { Expense } from '../../types';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_CURRENCIES_IN_SELECT:
      return {
        ...state,
        currencies: action.payload,
      };
    case SET_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE:

      return {
        ...state,
        expenses: state.expenses
          .filter((expense: Expense) => expense
            .id !== action.payload),
      };

    default:
      return state;
  }
};

export default wallet;
