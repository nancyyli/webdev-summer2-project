import React from 'react';
//import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//TODO change the link to searchresults/detail/resultId or something
export const SearchResults = (currentUser) => {
  return (<div class="container-fluid mt-5 mb-5">
    <div class="row">
      This is the Search Results
      <Link to={'/searchresults/detail'}>
      <button className="result-detail-btn">Detail</button>
      </Link>
    </div>
  </div>);
};

const dispatchToPropsMapper = dispatch => ({

})

const stateToPropsMapper = state => ({
  currentUser: state.currentUser,
})

export const SearchResultsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(SearchResults);
