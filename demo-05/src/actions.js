import * as actionTypes from "./actionTypes";

export const increment = (n = 1) => ({
  type: actionTypes.INCREMENT,
  payload: n
});

export const decrement = (n = 1) => ({
  type: actionTypes.DECREMENT,
  payload: n
});
