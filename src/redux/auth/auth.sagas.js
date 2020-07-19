import { takeLatest, put, call, all, select } from "redux-saga/effects";
import * as authTypes from "./auth.types";

import * as RootNavigation from "~/navigation/RootNavigation";

/**
 * A function to mock an API request
 * @param {Boolean} success
 */
const mock = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("user");
      } else {
        reject({ message: "Error" });
      }
    }, 2000);
  });
};

export function* signinUser() {
  try {
    const user = yield mock(true);
    yield put({ type: authTypes.SIGNIN_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    yield put({ type: authTypes.SIGNIN_FAILED, payload: "Signin error!" });
  }
}

export function* signupUser() {
  try {
    const user = yield mock(true);
    yield put({ type: authTypes.SIGNUP_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    yield put({ type: authTypes.SIGNUP_FAILED, payload: "Signup error!" });
  }
}

export function* signOutUser() {
  try {
    const user = yield mock(true);
    yield put({ type: authTypes.SIGN_OUT_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: authTypes.SIGN_OUT_FAILED, payload: "Sign out error!" });
  }
}

// listeners
export function* onSigninStarted() {
  yield takeLatest(authTypes.SIGNIN_STARTED, signinUser);
}

export function* onSignupStarted() {
  yield takeLatest(authTypes.SIGNUP_STARTED, signupUser);
}

export function* onSignOutStarted() {
  yield takeLatest(authTypes.SIGN_OUT_STARTED, signOutUser);
}

// root auth saga
export function* authSagas() {
  yield all([
    call(onSigninStarted),
    call(onSignupStarted),
    call(onSignOutStarted),
  ]);
}
