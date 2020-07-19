import {createSelector} from 'reselect';

const selectApp = (state) => state.app;

export const selectFirstVisit = createSelector(
  [selectApp],
  ({firstVisit}) => firstVisit,
);
