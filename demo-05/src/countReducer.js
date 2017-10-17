import * as actionTypes from './actionTypes';

export default (state = 0, action) => {
  console.log(state, action);

  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + action.payload;
    case actionTypes.DECREMENT:
      return state - action.payload;
  }

  return state;
};
