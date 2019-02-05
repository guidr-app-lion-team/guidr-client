import axios from 'axios';

export const FETCH_NEWSFEED_START = "FETCH_NEWSFEED_START";
export const FETCH_NEWSFEED_SUCCESS = "FETCH_NEWSFEED_SUCCESS";
export const FETCH_NEWSFEED_FAIL = "FETCH_NEWSFEED_FAIL"; 

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL"; 


export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL"; 


export const getNewsFeed = () => dispatch =>{
    dispatch({type: FETCH_NEWSFEED_START});
    axios
    .get(`https://guidr2.herokuapp.com/adventures`)
    .then(res => dispatch({type: FETCH_NEWSFEED_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_NEWSFEED_FAIL, payload: err}))
  }
  export const getUsers = () => dispatch =>{
    dispatch({type: FETCH_USERS_START});
    axios
    .get(`https://guidr2.herokuapp.com/user`)
    .then(res => dispatch({type: FETCH_USERS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_USERS_FAIL, payload: err}))
  }

  export const addUser = user => dispatch =>{
    console.log(user)
    dispatch({type: ADD_USER_START});
    axios
    .post(`https://guidr2.herokuapp.com/user`, user)
    .then(res => console.log(res))
    // .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADD_USER_FAIL, payload: err}))
  }
  // addUser = (user) => {
  //   const token = localStorage.getItem('token')
  //   const headers = { headers: { 'Authorization': `Token ${token}` } }
  //   axios.post('http://127.0.0.1:8000/api/countries/', newCountry, headers)
  //     .then(resp => this.getData())
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }
