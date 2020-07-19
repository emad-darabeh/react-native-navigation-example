import * as authTypes from './auth.types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  authenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.SIGNIN_STARTED:
    case authTypes.SIGNUP_STARTED:
    case authTypes.SIGN_OUT_STARTED:
      return {
        ...state,
        loading: true,
      };

    case authTypes.SIGNIN_SUCCESS:
    case authTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loading: false,
        error: null,
      };
    case authTypes.SIGN_OUT_SUCCESS:
      return INITIAL_STATE;

    case authTypes.SIGNIN_FAILED:
    case authTypes.SIGNUP_FAILED:
    case authTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
