import * as constants from "store/actions/constants"

const DEFAULT_STATE = {
  list: [],
  selected: {}
};

const recipeReducer = (state = DEFAULT_STATE, action) => {
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case constants.GET_RECIPES:
      newState.list = action.recipe;
      return newState;
    case constants.GET_RECIPE_BY_ID:
      newState.selected = action.recipe;
      return newState;
    case constants.CREATE_RECIPE:
      newState.selected = action.recipe;
      return newState;
    case constants.SEARCH_RECIPE_TITLE:
      newState.list = action.recipe;
      return newState;
    default:
      return state
  }
};

export default recipeReducer;
