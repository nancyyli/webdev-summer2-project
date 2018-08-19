import axios from 'axios';

import * as constants from "store/actions/constants";


export const queryLoginStatus = () => {
  return dispatch => {
    axios.get('/api/user/me').then(
      response => {
        dispatch({ type: constants.FACEBOOK_LOGIN_SUCCESS });
        dispatch({ type: constants.USER_DATA_FETCHED, user: response.data });
        dispatch(getFollowers(response.data.id));
      },
      error => {
        dispatch({ type: constants.USER_DATA_FETCH_FAILED });
      });
  };
};

export const getUserData = () => {
  return dispatch => {
    axios.get('/api/user/me').then(response => {
      const user = response.data;
      dispatch({ type: constants.USER_DATA_FETCHED, user });
      dispatch(getFollowers(response.data.id));
    });
  };
};

export const getFollowers = (id) => {
  return dispatch => {
    axios.get(`/api/user/${id}/following`).then(response => {
      dispatch({ type: constants.USER_FOLLOWING_FETCHED, following: response.data });
    });
    axios.get(`/api/user/${id}/followers`).then(response => {
      dispatch({ type: constants.USER_FOLLOWERS_FETCHED, followers: response.data });
    });
  }
}

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

export const getRecipes = () => {
  return dispatch => {
    axios('/api/recipe').then(response => {
      dispatch( { type: constants.GET_RECIPES, recipe: response.data});
    });
  };
};

export const createRecipe = (recipe) => {
  const newRecipe = JSON.stringify(recipe);
  return dispatch => {
    axios.post('/api/recipe', newRecipe, {
      headers: { 'content-type': 'application/json'}}).then(response => {
      dispatch( { type: constants.CREATE_RECIPE, recipe: response.data});
    })
  }
}


export const login = (credentials = {username: "", password: ""}) => {
  return dispatch => {
    const loginData = new FormData();
    loginData.append('username', credentials.username);
    loginData.append('password', credentials.password);

    axios.post('/login', loginData).then(() => {
      dispatch({ type: constants.APP_LOGIN_SUCCESS });
      dispatch(getUserData());
    });
  };
};

export const register = (registration = { email: "", password: "", name: "", role: "" }) => {
  return dispatch => {
    axios.post('/register', registration).then(() => {
      dispatch({ type: constants.USER_REGISTERED });
      dispatch({ type: constants.APP_LOGIN_SUCCESS });
      dispatch(getUserData());
    })
  };
};

export const updateProfile = (updates = { email: "", name: "", role: "" }) => {
  return dispatch => {
    axios.put('/api/user/me', updates).then((response) => {
      dispatch({ type: constants.PROFILE_UPDATED });
      dispatch({ type: constants.USER_DATA_FETCHED, user: response.data });
    });
  };
};

export const getRecipeById = (id) => {
  return dispatch => {
    axios('/api/recipe/' + id).then(response => {
      dispatch( { type: constants.GET_RECIPE_BY_ID, recipe: response.data});
    })
  }
}

export const logout = (history) => {
  return dispatch => {
    axios.post('/logout').then(() => {
      dispatch({ type: constants.LOGGED_OUT });
      history.push('/');
    });
  };
};
