import * as constants from "store/actions/constants"

const DEFAULT_STATE = {
  loggedIn: false,
  info: {},
  followers: [],
  following: []
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.APP_LOGIN_SUCCESS:
      return { loggedIn: true, info: {}, followers: [], following: [] };
    case constants.USER_DATA_FETCHED:
      return { loggedIn: true, info: action.user, followers: [], following: [] };
    case constants.USER_FOLLOWERS_FETCHED:
      return { ...state, followers: action.followers };
    case constants.USER_FOLLOWING_FETCHED:
      return {...state, following: action.following };
    case constants.USER_DATA_FETCH_FAILED:
    case constants.LOGGED_OUT:
      return DEFAULT_STATE;
    default:
      return state
  }
};

export default userReducer;
