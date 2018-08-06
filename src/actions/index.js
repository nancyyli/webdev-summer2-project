import * as constants from "../constants/index"
// import service

// let widgetService = WidgetService.instance;
export const register = (dispatch) => (
  dispatch({
    type: constants.REGISTER})
)

export const loginFacebook = (dispatch) => (
    dispatch({
        type: constants.LOGIN_FACEBOOK
    })
    //    fetch('https://localhost:8443/api/me').then(function (response) {
    //         console.log(response);
    //         dispatch({
    //             type: constants.LOGIN_FACEBOOK})
    //     })
  )
