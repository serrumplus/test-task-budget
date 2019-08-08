import * as constants from '../constants';

const initialState = {};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case constants.INITIALIZE_PROJECTS:
      return {
        ...state, 
        data: action.payload
      };

    default:
      return state;
  }
};