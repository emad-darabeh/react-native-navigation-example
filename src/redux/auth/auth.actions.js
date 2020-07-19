import * as authTypes from './auth.types';

export const signin = () => (dispatch) => {
  dispatch({
    type: authTypes.SIGNIN_STARTED,
  });
};

export const signup = () => (dispatch) => {
  dispatch({
    type: authTypes.SIGNUP_STARTED,
  });
};

export const singOut = () => (dispatch) => {
  dispatch({
    type: authTypes.SIGN_OUT_STARTED,
  });
};
