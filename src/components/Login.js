import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

export const Login = (currentUser) => {
  return (<div class="container-fluid mt-5 mb-5">
    <div class="row">
      This is the Login Page
    </div>
  </div>);
};

const dispatchToPropsMapper = dispatch => ({

})

const stateToPropsMapper = state => ({
  currentUser: state.currentUser,
})

export const LoginContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Login);
