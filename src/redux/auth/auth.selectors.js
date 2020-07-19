import {createSelector} from 'reselect';

const selectAuth = (state) => state.auth;

export const selectAuthenticated = createSelector(
  [selectAuth],
  ({authenticated}) => authenticated,
);

export const selectLoading = createSelector(
  [selectAuth],
  ({loading}) => loading,
);

export const selectError = createSelector([selectAuth], ({error}) => error);
