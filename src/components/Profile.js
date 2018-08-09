import React from 'react';
//import * as actions from 'store/actions';
import {connect} from 'react-redux';

export const Profile = (currentUser) => {
  console.log(currentUser);
  return (<div class="container-fluid mt-5 mb-5">
    <div class="row">
      <div class='col'>
        &nbsp;
      </div>
      <div class='col-7'>
        <h1 className='display-3'>Profile</h1>
        <div class="form-group row">
          <label for="emailFld" class="col-lg-2 col-form-label">Email</label>
          <div class="col-lg-10">
            <input type="text" readonly="readonly" class="form-control-plaintext" value={currentUser.currentUser.email}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="usernameFld" class="col-lg-2 col-form-label">Username</label>
          <div class="col-lg-10">
            <input type="text" class="form-control" value={currentUser.currentUser.username}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="passwordFld" class="col-lg-2 col-form-label">Password</label>
          <div class="col-lg-10">
            <input type="password" class="form-control" value={currentUser.currentUser.password}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="firstNameFld" class="col-lg-2 col-form-label">
            First Name
          </label>
          <div class="col-lg-10">
            <input type="text" class="form-control" value={currentUser.currentUser.firstName}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="lastNameFld" class="col-lg-2 col-form-label">
            Last Name
          </label>
          <div class="col-lg-10">
            <input type="text" class="form-control" value={currentUser.currentUser.lastName}/>
          </div>
        </div>
        <div class="form-group row">
          <label for="phoneFld" class="col-lg-2 col-form-label">
            Phone
          </label>
          <div class="col-lg-10">
            <input class="form-control" placeholder="phone" value='{{currentUser.phone}}'/>
          </div>
        </div>
        <div class="form-group row">
          <label for="dateOfBirthFld" class="col-lg-2 col-form-label">
            Date of Birth</label>
          <div class="col-lg-10">
            <input class="form-control" value='{{currentUser.dateOfBirth}}'/>
          </div>
        </div>
        <div class="form-group row">
          <label for="role" class="col-lg-2 col-form-label">Role</label>
          <div class="col-lg-10">
            <input type="text" readonly="readonly" class="form-control-plaintext" value='{{currentUser.role}}'/>
          </div>
        </div>
        <div class="buttons">
          <button id="updateBtn" type="button" class="btn btn-success btn-block">Update</button>
          <button id="logoutBtn" type="button" class="btn btn-danger btn-block">Log out</button>
        </div>
      </div>
      <div class='col'>
        &nbsp;
      </div>
    </div>
  </div>);
};

const dispatchToPropsMapper = dispatch => ({

})

const stateToPropsMapper = state => ({
  currentUser: state.currentUser,
})

export const ProfileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Profile);
