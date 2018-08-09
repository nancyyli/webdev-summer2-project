import React from 'react';
//import * as actions from 'store/actions';
import {connect} from 'react-redux';

export const Profile = (currentUser) => {
  return (<div className="container-fluid mt-5 mb-5">
    <div className="row">
      <div className='col'>
        &nbsp;
      </div>
      <div className='col-7'>
        <h1 className='display-3'>Profile</h1>
        <div className="form-group row">
          <label htmlFor="emailFld" className="col-lg-2 col-form-label">Email</label>
          <div className="col-lg-10">
            <input type="text" readOnly className="form-control-plaintext" value={currentUser.currentUser.email}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="usernameFld" className="col-lg-2 col-form-label">Username</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" value={currentUser.currentUser.username}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="passwordFld" className="col-lg-2 col-form-label">Password</label>
          <div className="col-lg-10">
            <input type="password" className="form-control" value={currentUser.currentUser.password}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="firstNameFld" className="col-lg-2 col-form-label">
            First Name
          </label>
          <div className="col-lg-10">
            <input type="text" className="form-control" value={currentUser.currentUser.firstName}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastNameFld" className="col-lg-2 col-form-label">
            Last Name
          </label>
          <div className="col-lg-10">
            <input type="text" className="form-control" value={currentUser.currentUser.lastName}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phoneFld" className="col-lg-2 col-form-label">
            Phone
          </label>
          <div className="col-lg-10">
            <input className="form-control" readOnly placeholder="phone" value='{{currentUser.phone}}'/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="dateOfBirthFld" className="col-lg-2 col-form-label">
            Date of Birth</label>
          <div className="col-lg-10">
            <input className="form-control" readOnly value='{{currentUser.dateOfBirth}}'/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="role" className="col-lg-2 col-form-label">Role</label>
          <div className="col-lg-10">
            <input type="text" readOnly className="form-control-plaintext" value='{{currentUser.role}}'/>
          </div>
        </div>
        <div className="buttons">
          <button id="updateBtn" type="button" className="btn btn-success btn-block">Update</button>
          <button id="logoutBtn" type="button" className="btn btn-danger btn-block">Log out</button>
        </div>
      </div>
      <div className='col'>
        &nbsp;
      </div>
    </div>
  </div>);
};

const dispatchToPropsMapper = dispatch => ({

})

const stateToPropsMapper = state => ({
  currentUser: state.user.info,
})

export const ProfileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Profile);
