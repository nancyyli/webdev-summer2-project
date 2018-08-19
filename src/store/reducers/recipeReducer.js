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
  }]
};

const recipeReducer = (state = DEFAULT_STATE, action) => {
  let newState;
  switch (action.type) {
    case constants.GET_RECIPES:
      newState = Object.assign({}, state)
      newState.list = action.recipe;
      return newState;
    default:
      return state
  }
};

export default recipeReducer;
