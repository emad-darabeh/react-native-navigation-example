import {
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGN_OUT_SUCCESS,
} from '../auth/auth.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    case SIGN_OUT_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default userReducer;
