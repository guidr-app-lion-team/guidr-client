import axios from 'axios';

export const FETCH_NEWSFEED_START = "FETCH_NEWSFEED_START";
export const FETCH_NEWSFEED_SUCCESS = "FETCH_NEWSFEED_SUCCESS";
export const FETCH_NEWSFEED_FAIL = "FETCH_NEWSFEED_FAIL"; 


export const getNewsFeed = () => dispatch =>{
    dispatch({type: FETCH_NEWSFEED_START});
    axios
    .get(`https://guidr2.herokuapp.com/adventures`)
    .then(res => dispatch({type: FETCH_NEWSFEED_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_NEWSFEED_FAIL, payload: err}))
  }

  