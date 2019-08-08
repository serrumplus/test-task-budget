import * as constants from '../constants';

const initialState = {
  data: {}
};

export const budget = (state = initialState, action) => {

  switch (action.type) {
    case constants.INITIALIZE_BUDGET_DATA:
      return {
        ...state, 
        data: action.payload
      };

    default:
      return state;
  }
};