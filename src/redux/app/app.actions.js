import * as appTypes from './app.types';

export const setFirstVisit = (firstVisit) => (dispatch) => {
  dispatch({
    type: appTypes.SET_FIRST_VISIT,
    payload: firstVisit,
  });
};
