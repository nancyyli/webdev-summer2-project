import * as constants from "../constants/index"
// import service

// let widgetService = WidgetService.instance;
export const loginReducer = (state = { currentUser: {}}, action) => {
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
        // return fetch('https://localhost:8443/api/me', {
        //     'mode': 'no-cors'
        // }).then(function (response) {
        //     return { currentUser: {email: 'email', username: 'username'} };
        // })
        console.log('still go in');
        return { currentUser: {email: 'email', username: 'username'}};
    default:
      return state
  }
}
