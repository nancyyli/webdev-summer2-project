import React from 'react';

export const RegisterForm = () => {
  return (
    <div class="text-dark container-fluid row mt-5 mb-5">
      <div class="col">
        &nbsp;
      </div>
      <div class="col-5 rounded pt-3 pb-3 pr-5 pl-5">
        <h1 class='display-3'>Sign up</h1>
        <div class='row'>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="username" class="control-label">
                  Username </label>
                <input class="form-control" placeholder="ehao"/>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="password" class="control-label">
                  Password </label>
                <input type="password" class="form-control"  placeholder="hello123"/>
            </div>
          </div>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="passwordFld2" class="control-label">
                  Validate password </label>
                <input type="password" class="form-control"  placeholder="hello123"/>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="firstNameFld" class="control-label">
                  First Name </label>
                <input class="form-control"  placeholder="Ernie"/>
            </div>
          </div>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="lastNameFld" class="control-label">
                  Last name </label>
                <input class="form-control"  placeholder="Hao"/>
            </div>
          </div>
        </div>
        <div class='row'>

          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="emailFld" class="control-label">
                  Email </label>
                <input class="form-control"  placeholder="hao.e@gmail.com"/>
            </div>
          </div>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="phoneFld" class="control-label">
                  Phone </label>
                <input class="form-control" placeholder="617-651-7125"/>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="dateOfBirthFld" class="control-label">
                  Date of Birth </label>
              <input type="date" class="form-control"
              placeholder="09/22/1998"/>
            </div>
          </div>
          <div class="form-group col-md">
            <div class="d-flex flex-column">
              <label for="roleFld" class="control-label">
                  Role </label>
              <select  class="form-control">
                    <option value="" disabled selected>Select role</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                    <option value="ADMIN">Admin</option>
                  </select>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col'>
            &nbsp;
          </div>
          <div class='d-flex flex-column justify-content-center'>
            <div>
              <button class="btn btn-md btn-primary col-md mb-3">
                Register here </button>
            </div>
            <a class='text-dark'>Already have an account?</a>
          </div>
          <div class='col'>
            &nbsp;
          </div>
        </div>
      </div>
      <div class="col">
        &nbsp;
      </div>
    </div>
);
};
