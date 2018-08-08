import React from 'react';
import * as actions from 'store/actions';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';

export const SearchResultDetails = (currentUser) => {
  return (<div class="container-fluid mt-5 mb-5">
    <div class="row">
      This is the Search Result Details per search result if u click on it

    </div>
  </div>);
};

const dispatchToPropsMapper = dispatch => ({

})

const stateToPropsMapper = state => ({
  currentUser: state.currentUser,
})

export const SearchResultDetailsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(SearchResultDetails);
