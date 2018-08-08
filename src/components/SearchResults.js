import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

export const SearchResults = (currentUser) => {
  return (<div class="container-fluid mt-5 mb-5">
    <div class="row">
      This is the Search Results
    </div>
  </div>);
};

const dispatchToPropsMapper = dispatch => ({

})

const stateToPropsMapper = state => ({
  currentUser: state.currentUser,
})

export const SearchResultsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(SearchResults);
