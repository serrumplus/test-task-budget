import * as constants from "./constants";

export const initializeBudgetAction = data => ({
  type: constants.INITIALIZE_BUDGET_DATA,
  payload: data
});


export const initializeProjectsAction = data => ({
  type: constants.INITIALIZE_PROJECTS,
  payload: data
});
