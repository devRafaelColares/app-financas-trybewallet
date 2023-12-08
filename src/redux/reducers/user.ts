import { ActionType } from '../../types';
import { SET_EMAIL } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o e-mail da pessoa usuária
  },
};

const user = (state = INITIAL_STATE, action: ActionType) => {
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
