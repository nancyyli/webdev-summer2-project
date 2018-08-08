import React from 'react';
import {Link, Route} from 'react-router-dom';
import {RegisterFormContainer} from '../components/RegisterForm'
import {ProfileContainer} from '../components/Profile'
import {LoginContainer} from '../components/Login'
import {BrowserRouter as Router} from 'react-router-dom';

import '../styles/Homepage.css';
import { SearchResultsContainer } from '../components/SearchResults';
import { SearchResultDetailsContainer } from '../components/SearchResultDetails';

class Homepage extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid ">
      <div className="bg-dark">
        <h3 className="display-3 pt-4 pb-4 pl-3 mr-5 ml-4 rounded">kooker</h3>
      </div>
      <div className='row'>
        <div className='col'>
          <div className="form-group ">
            <label htmlFor="search-input">Search for recipes here</label>
            <input className="form-control" id="search-input" placeholder="Recipes here"/>
            <Link to={'/searchresults'}>
            <button className="submit-search-btn btn btn-primary">Search!</button>
            </Link>
          </div>
        </div>
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
        <div className='col'>
          <Link to={'/login'}>
          <button className="btn btn-warning">Login</button>
          </Link>
        </div>
      </div>
      <Route path="/register" component={RegisterFormContainer}/>
      <Route path="/profile" component={ProfileContainer}/>
      <Route path="/login" component={LoginContainer}/>
      <Route path="/searchresults" component={SearchResultsContainer}/>
      <Route path="/searchresults/detail" component={SearchResultDetailsContainer}/>

    </div>
    </Router>);
  }
}

export default Homepage;
