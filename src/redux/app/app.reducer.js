import * as appTypes from './app.types';

const INITIAL_STATE = {
  firstVisit: true,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.SET_FIRST_VISIT:
      return {
        ...state,
        firstVisit: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
