import * as constants from "constants/index"

const DEFAULT_STATE = {
  loggedIn: false,
  info: {}
};

const userReducer = (state = DEFAULT_STATE, action) => {
  let newState;
  switch (action.type) {
    default:
      return state
  }
};

export default userReducer;
