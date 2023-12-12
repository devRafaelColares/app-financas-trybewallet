import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ActionTypeUser = {
  type: string,
  payload: string,
};

export type Wallet = {
  currencies: string[];
  expenses: Expense[];
  editor: boolean;
  idToEdit: number;
  selectedCurrency: string;
};

export type Expense = {
  id: number;
  value: number;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: any;
};

export type ReduxState = {
  user:ActionTypeUser,
  wallet: Wallet,
};

export type Dispatch = ThunkDispatch<Wallet, null, AnyAction>;
