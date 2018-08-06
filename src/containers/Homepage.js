import React from 'react';
import {Link, Route} from 'react-router-dom';
import {RegisterForm} from '../components/RegisterForm'
import {Profile} from '../components/Profile'


import '../styles/Homepage.css';

class Homepage extends React.Component {
  render() {
    return (<div className="container-fluid ">
      <div className="bg-dark">
        <h3 className="display-3 pt-4 pb-4 pl-3 mr-5 ml-4 rounded">kooker</h3>
      </div>

      <div className='row'>
        <div className='col'>
          <Link to={'/register'}>
          <button className="btn btn-primary">Register</button>
        </Link>
        </div>
        <div className='col'>
          <Link to={'/profile'}>
          <button className="btn btn-warning">Profile</button>
        </Link>
        </div>
      </div>
      <Route path="/register" component={RegisterForm}/>
        <Route path="/profile" component={Profile}/>

    </div>);
  }
}

export default Homepage;
