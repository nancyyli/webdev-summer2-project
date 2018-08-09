import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderLoggedIn from 'components/HeaderLoggedIn';
import HeaderLoggedOut from 'components/HeaderLoggedOut';

import { ProfileContainer } from 'components/Profile';
import Home from 'components/Home';
import Login from 'components/Login';

import { SearchResultsContainer } from 'components/SearchResults';
import { SearchResultDetailsContainer } from 'components/SearchResultDetails';

import 'styles/Homepage.css';


class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.loggedIn ?
            <HeaderLoggedIn user={this.props.user} /> :
            <HeaderLoggedOut />}
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={ProfileContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  user: state.user.info
});

const mapActionsToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Homepage));




// <Router>
//   <div className="container-fluid">
//     <div className="bg-dark">
//       <h3 className="display-3 pt-4 pb-4 pl-3 mr-5 ml-4 rounded">
//         kooker
//       </h3>
//     </div>
//     <div className="row">
//       <div className="col">
//         <div className="form-group ">
//           <label htmlFor="search-input">Search for recipes here</label>
//           <input
//             className="form-control"
//             id="search-input"
//             placeholder="Recipes here"
//           />
//           <Link to={'/searchresults'}>
//             <button className="submit-search-btn btn btn-primary">
//               Search!
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col">
//       </div>
//       <div className="col">
//         <Link to={'/profile'}>
//           <button className="btn btn-warning">Profile</button>
//         </Link>
//       </div>
//       <div className="col">
//         <Link to={'/login'}>
//           <button className="btn btn-warning">Login</button>
//         </Link>
//       </div>
//     </div>
//     <Route path="/profile" component={ProfileContainer} />
//     <Route path="/login" component={LoginContainer} />
//     <Route path="/searchresults" component={SearchResultsContainer} />
//     <Route
//       path="/searchresults/detail"
//       component={SearchResultDetailsContainer}
//     />
//   </div>
// </Router>
