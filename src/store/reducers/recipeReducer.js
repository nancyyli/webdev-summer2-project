import * as constants from "store/actions/constants"

const DEFAULT_STATE = {
  list: [  {
    "id": 0,
    "title": "",
    "author": {
        "id": 0,
        "name": "",
        "role": ""
    },
    "duration": "",
    "yield": "",
    "ingredients": [],
    "steps": []
  }],
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
    default:
      return state
  }
};

export default recipeReducer;
