import { ActionTypeUser } from '../../types';
import { SET_EMAIL } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '', // string que armazena o e-mail da pessoa usuária
};

const user = (state = INITIAL_STATE, action: ActionTypeUser) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
