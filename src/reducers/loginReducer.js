import * as constants from "../constants/index"
// import service

// let widgetService = WidgetService.instance;
export const loginReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {

    case constants.REGISTER: 
        // newState = Object.assign({}, state)
        console.log('register');
        newState = {success: 'Register'};
        return newState;

    case constants.LOGIN_FACEBOOK:
        // console.log('login with facebook');
        // newState = Object.assign({}, state)
        // newState.user = action.user;
        // console.log(newState);
        // return newState
        // newState = {success: 'login-facebook'};
        // return newState;
        return fetch('https://localhost:8443/login').then(function (response) {
            console.log(response);
        })

    default:
      return state
  }
}