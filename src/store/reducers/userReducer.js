import * as constants from "store/actions/constants"

const DEFAULT_STATE = {
  loggedIn: false,
  info: {}
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.APP_LOGIN_SUCCESS:
      return { loggedIn: true, info: {} };
    case constants.USER_DATA_FETCHED:
      return { loggedIn: true, info: action.user };
    case constants.USER_DATA_FETCH_FAILED:
    case constants.LOGGED_OUT:
      return { loggedIn: false, info: {} };
    default:
      return state
  }
};

export default userReducer;
