import {
  FETCH_NEWSFEED_START,
  FETCH_NEWSFEED_SUCCESS,
  FETCH_NEWSFEED_FAIL,
  FETCH_USERS_FAIL,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS
} from '../actions'


const initialState = {
    isFetchingFeed: false,
    isFetchingUsers: false,
    adventures: [],
    error: null,
    users:[],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_NEWSFEED_START:
  return{
    ...state,
    error: null,
    isFetchingFeed: true
  };
  case FETCH_NEWSFEED_SUCCESS:
  return{
    ...state,
    error: null,
    isFetchingFeed: false,
    adventures: payload
  };
  case FETCH_NEWSFEED_FAIL:
  return{
      ...state,
      isFetchingFeed: false,
      error: payload,
  };
  case FETCH_USERS_START:
  return{
    ...state,
    isFetchingUsers: true,
    error: null 
  };
  case FETCH_USERS_SUCCESS:
  return{
    ...state,
    error: null,
    isFetchingFeed: false,
    users: payload
  };
  case FETCH_USERS_FAIL:
  return{
    ...state,
    isFetchingFeed: false,
    error: payload,
  };
  default:
    return state
  }
}
