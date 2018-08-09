import axios from 'axios';

import * as constants from "store/actions/constants";


export const getUserData = () => {
  return dispatch => {
    axios.get('/api/me').then(response => {
      dispatch({ type: constants.USER_DATA_FETCHED, user: response.data });
    });
  };
};

export const loginFacebook = (fbResponse) => {
  return dispatch => {
    const fbId = fbResponse.authResponse.userID;
    const fbToken = fbResponse.authResponse.accessToken;

    dispatch({ type: constants.FACEBOOK_LOGIN_SUCCESS });

    const loginData = new FormData();
    loginData.append('username', fbId);
    loginData.append('password', fbToken);

    axios.post('/login', loginData).then(() => {
      dispatch({ type: constants.APP_LOGIN_SUCCESS });
      dispatch(getUserData());
    });
  };
};
